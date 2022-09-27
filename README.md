# Backend_Assignment
build a stateless  microservice in Nodejs (Express js) with the following functionalities<br />
-> Authentication<br />
-> JSON patching<br />
-> Image Thumbnail Generation<br />
-> Adding User address in database


<h1>Authentication</h1>
<ul>
<li>when user login then server create Token using JWT </li>
<li>since login is public request everyone can access login route.And store token </li>
<li>when we need to acccess protected routes like JSON Patching,adding user address,tumbnail generation use this token in http request in headers</li>
<li>if we don't mention token then we cannot access the protected routes</li>

</ul>
<img src="https://user-images.githubusercontent.com/90703523/192591391-92a41019-a1e4-40d7-8063-a7dac3191ab6.png" />
<div>
<h3>Below mentioned reponse for each routes with images</h3>
<div>
<h1> JSON patching</h1>
<div>


<img src="https://user-images.githubusercontent.com/90703523/192588708-5b657c59-6e8a-4596-b6e5-5c69cd3e7831.png" />
<p>when we send request with valid token</p>
</div>
<div>


<img src="https://user-images.githubusercontent.com/90703523/192588999-eee3143f-59cd-4427-8d80-d50ef53efdcf.png" />
<p>when we send request without valid token</p>
</div>
</div>
<div>
<h1> Image Thumbnail Generation</h1>


<div>
<img src="https://user-images.githubusercontent.com/90703523/192589746-d623c298-fd55-4e02-ad01-534802e69439.png" />
<p>before converting img </p>
</div>
<div>
<img src="https://user-images.githubusercontent.com/90703523/192589409-ae68ae75-a4e6-4f05-98ee-dbdb88b2f29b.png" />
<p>after converting img to 50X50 size</p>
</div>
<div>


<img src="https://user-images.githubusercontent.com/90703523/192590184-a5e89db4-5f05-45e0-ab50-bbf4f26d0fa4.png" />
<p>If request contain invalid token</p>
</div>



</div>


<div>
<h1> Adding User address in database</h1>

<div>


<img src="https://user-images.githubusercontent.com/90703523/192590687-c2918257-3a89-4647-b457-7c0a846c6eb5.png" />
<p>If request contain valid token then it return address from DataBase</p>
</div>
<div>



<img src="https://user-images.githubusercontent.com/90703523/192591051-20015707-c77b-41fe-8c0f-b4ca0eb6f5a8.png" />
<p>If request contain valid token then it return address from DataBase</p>
</div>

</div>

<h1>To run in your system</h1>
<ul>
<li>Clone this repository and open in code editor</li>
<li>run npm install command to download dependencies and run nodemon index.js command to start serve</li>

</ul>
<ul>
<li>For login : <b>http://localhost:5000/login</b></li>
<li>For JSON patching : <b>http://localhost:5000/patch</b></li>
<li>For Tumbnail Generation : <b>http://localhost:5000/resizen</b></li>
<li>For Saving User Address : <b>http://localhost:5000/address</b></li>

</ul>
</div>
