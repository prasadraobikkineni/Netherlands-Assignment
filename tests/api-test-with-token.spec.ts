
import { test, expect } from '@playwright/test';
test.describe.configure({ mode: 'serial' });
class UserRegistrationInfo{
    userName: string;
    password: string
}
class UserInfo{
    userID: string
}
let userInfo : UserInfo | null = null;
let userId : string | null = null;
let authorizationHeaders: {[key: string]: string} | null  = null;
const correctUserInfo : UserRegistrationInfo = 
    {
        userName: 'test12@test.com',
        password: '12345Aa.*-12'
  };
test.afterAll(async({request})=>{
    if(userId != null && authorizationHeaders != null){
        const deleteUserResponse = await request.delete(`/Account/v1/User/${userId}`, {
            headers: authorizationHeaders
           })
        expect(deleteUserResponse.ok()).toBeTruthy();        
    }
})
test("Incorrect creation user", async({request})=>{
    const incorrectUserInfo =  {
        userName: 'test3@test.com',
        password: '12345'
      };
    const incorrectUserCreationResponse =  await request.post(`/Account/v1/User`, {
        data: incorrectUserInfo
    });
    expect(incorrectUserCreationResponse.ok()).toBeFalsy();
});
test("Correct creation user", async({request})=>{
    const correctUserCreationResponse =  await request.post(`/Account/v1/User`, {
        data: correctUserInfo
    });
    const responseJson = await correctUserCreationResponse.json(); 
    expect(correctUserCreationResponse.ok()).toBeTruthy();
    userInfo = await correctUserCreationResponse.json();
    expect(userInfo).not.toBeNull()
    userId = userInfo!.userID;
})
test("Token retrieval", async({request})=>{
    if(userInfo != null){
    userId = userInfo.userID;
    const tokenResponse = await request.post("/Account/v1/GenerateToken", {
        data: correctUserInfo
      });
    expect(tokenResponse.ok()).toBeTruthy()
    const tokenValueObject = await tokenResponse.json();
    const tokenValue = tokenValueObject.token;
    authorizationHeaders = {
        "Authorization": `Bearer ${tokenValue}`
    }
}

});
test('Incorrect save book', async({request})=>{
    expect(authorizationHeaders).not.toBeNull()
    const saveBookRequestBodyIncorrect = {
        "collectionOfIsbns": [
          {
            "isbn": "1234"
          },
          {"isbn": "2222"}
        ]
      }
      const incorrectSaveBookResponse = await request.post("/BookStore/v1/Books", {
        data: saveBookRequestBodyIncorrect,
    });
    expect(incorrectSaveBookResponse.ok()).toBeFalsy();
   
})
test('Correct save book', async({request})=>{
    expect(userId).not.toBeNull()
    expect(authorizationHeaders).not.toBeNull()
    const saveBookRequestBodyCorrect = {
        "userId": userId,
        "collectionOfIsbns": [
          {
            "isbn": "1234"
          },
          {"isbn": "2222"}
        ]
      }
    
      const saveBookResponse = await request.post("/BookStore/v1/Books", {
        data: saveBookRequestBodyCorrect,
        headers: authorizationHeaders!
    });
    expect(saveBookResponse.ok()).toBeTruthy();
   
})
test('Incorrect delete book', async({request})=>{
    expect(authorizationHeaders).not.toBeNull()
    const deleteBookRequestBodyIncorrect = {
        "isbn": "1234"
  }

    const deleteBookResponse = await request.delete("/BookStore/v1/Book", {
        data: deleteBookRequestBodyIncorrect,
    });
    expect(deleteBookResponse.ok()).toBeFalsy();
   
})
test('Correct delete book', async({request})=>{
    expect(authorizationHeaders).not.toBeNull()
    expect(userId).not.toBeNull()
    const deleteBookRequestBodyCorrect = {
        "userId": userId,
        "isbn": "1234"
         };
       const deleteBookResponseCorrect = await request.delete("/BookStore/v1/Book", {
            data: deleteBookRequestBodyCorrect,
            headers: authorizationHeaders!
        });
       expect(deleteBookResponseCorrect.ok()).toBeTruthy();
   
})

 
   
    
  
   

