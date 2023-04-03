<div align="center">
<h1> Mikasa Bot </h1>

<img src="./icons/mikasa.jpg" >

<a href="https://img.shields.io/github/languages/top/Ahmed-Hamdy101/Mikasa-discord"> <img src="https://img.shields.io/github/languages/top/Ahmed-Hamdy101/Mikasa-discord"> </a><a href="https://img.shields.io/github/repo-size/Ahmed-Hamdy101/Mikasa-discord"> <img src="https://img.shields.io/github/repo-size/Ahmed-Hamdy101/Mikasa-discord"> </a><a href="https://img.shields.io/github/stars/Ahmed-Hamdy101/Mikasa-discord?style=social"> <img src="https://img.shields.io/github/stars/Ahmed-Hamdy101/Mikasa-discord?style=social"> </a><a href="https://img.shields.io/github/watchers/Ahmed-Hamdy101/Mikasa-discord?style=social"> <img src="https://img.shields.io/github/watchers/Ahmed-Hamdy101/Mikasa-discord?style=social"> </a><a href="https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Ftwitter.com%2FTorn40535516"> <img src="https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Ftwitter.com%2FTorn40535516"> </a>
</div>

## how to install :
 - >  npm install

 - > touch .env

 - inside the file `.env` ADD THIS
   - ```TOKEN = 'My TOKEN'
        CLIENT_ID = 'My CLIENT_ID'
     ```
:warning: if you don't know what's the CLIENT_ID
  - go to server setting
  - copy server id and that's it


#### Commands:

|        Name      |  Inputs  |  Description | Response     |
|       ---        |      ---    |   ---        |   ---        |
|echo| string |Echo you inputs: example echo message: Hi there | ```status:200,message:'succes' ```|
|ping| string |ping  `inputs` : example `/ping  Hi there` |```status:200,message:succes``` |
|ping| int |ping some numbers with $ : example `/ping int: 4` | ```json{ status:200,input:1}  ```  |
|ping| File |ping Choice  `not working` | ```json{ status:400,input:not working}  ```  |
|ping| Target |ping @someone  `please choose him` | ```json{ status:200,input:Room,Location}  ```  |
|ping| destination |ping destination  `please choose room or someone` | ```json{ status:200,input:Room,someone Location}  ```  |
|ping| muted |ping muted  `not working currently` | ```json{ status:400,input: -------}  ```  |
|ping| num |ping num  `not working currently` | ```json{ status:400,input: -------}  ```  |
|ping| attachment |ping attachment  `not working currently` | ```json{ status:400,input: -------}  ```  |
|Update| string |tells update for channel  `` | ```json{ status:200,input: message to update  ```  |
