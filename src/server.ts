import dotenv from "dotenv"
import app from "./app"
import connectDb from "./config/database/mongodb/mongodb.config"


dotenv.config()
const port=process.env.PORT||3000

connectDb()

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
