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

|            | GET                          | PUT                            | POST               | DELETE                         |
|------------|------------------------------|--------------------------------|--------------------|--------------------------------|
| /User      |     Retrieve every User      |               N/A              | Create a New User  |               N/A              |
| /User/:id |  Retrieve User with given ID  | Update User with specified ID  |         N/A        | Delete User with specified ID  |

<p>
Definition of a User (JSON):<br>
{<br>
&nbsp;&nbsp;&nbsp; "Title": String,<br>
&nbsp;&nbsp;&nbsp; "Stormpath-ID": String,<br>
&nbsp;&nbsp;&nbsp; "Favourites" : [String],<br>
&nbsp;&nbsp;&nbsp; "Contributed" : [String],<br>
&nbsp;&nbsp;&nbsp; "Type": String,<br>
&nbsp;&nbsp;&nbsp; "Email": String<br>
}<br>
</p>