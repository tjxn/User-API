<p>
Used in Team Charbroiled's User Web App.
<br>
This API is run on charbroiled-user-api.herokuapp.com and is written in Typescript.<br>
<br>
Libraries Used Include:<br>
mongoose - http://mongoosejs.com/docs/ - /routes/api.ts<br>
<br>
<br>
</p>

|                    | GET                            | PUT                           | POST               | DELETE                        |
|--------------------|--------------------------------|-------------------------------|--------------------|-------------------------------|
| /user              | Retrieve JSON of every user.   | N/A                           | Create a new User. | N/A                           |
| /user/id/:id       | Retrieve User with given ID    | N/A                           | N/A                | N/A                           |
| /user/email/:email | Retrieve User with given email | N/A                           | N/A                | N/A                           |
| /user/:id          | N/A                            | Update User with specified ID | N/A                | Delete User with specified ID |
<p>
Definition of a User (JSON):<br>
{<br>
&nbsp;&nbsp;&nbsp; "StormpathID": String,<br>
&nbsp;&nbsp;&nbsp; "Favourites" : [String],<br>
&nbsp;&nbsp;&nbsp; "Contributed" : [String],<br>
&nbsp;&nbsp;&nbsp; "UserType": String,<br>
&nbsp;&nbsp;&nbsp; "Email": String<br>
}<br>
</p>
