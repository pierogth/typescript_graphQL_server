# How to Run
clone the repository in a specific folder, then run "<b>npm install</b>" 
You have to create a DB in railway: go to https://railway.app/ and click on "Start a new project" button, select the option "Provision PostGreSQL",
clicking on the istance just created in the "Data" tab you have to copy the URL for the DB connection and set the variable in the .env file
After this, you can run the commands for migrate and seed the DB hust created in railway, then build and run the project:  

1-npx prisma migrate dev --name init <br>
2-npx prisma db seed <br>
3-npm run build <br>
4-npm run dev <br>
