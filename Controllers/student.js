async function getAllStudent(req, res) {

    // res.status(500).json({
    //     message:'can not get all students'
    // })
  res.status(200).json({
    messsage: "get all students successfully",
    data: [
      {
        name: "Nguyen van A",
        email: "VanA@gmail.com",
        age: 18,
      },
      {
        name: "Nguyen van B",
        email: "VanB@gmail.com",
        age: 20,
      },
      {
        name: "Nguyen van B",
        email: "VanB@gmail.com",
        age: 23,
      },
      {
        name: "Nguyen van C",
        email: "VanC@gmail.com",
        age: 15,
      },
    ],
  });
}

async function getStudentByID(req, res) {}

async function updateStudent(req, res) {}

async function insertStudent(req, res) {}

export default {
  getAllStudent,
  getStudentByID,
  updateStudent,
  insertStudent,
};
