import Navbar from "./components/Navbar";
import User from "./components/User";

function App() {
  const data = [
    {
      nama: "A.Miftachul Hidayat",
      nim: "21120120120002",
      email: "amiftachulh@students.undip.ac.id",
    },
    {
      nama: "Mirza Ali Abhipraya",
      nim: "21120120130045",
      email: "mirzaabhi99@gmail.com",
    },
    {
      nama: "Muhanif Rafi Ahmadi",
      nim: "21120120130044",
      email: "muhanifrafi@gmail.com",
    },
    {
      nama: "Zefanya Lois Ligat Sugiarto",
      nim: "21120120130120",
      email: "zeflois28@gmail.com",
    },
  ];

  return (
    <>
      <Navbar />
      <div
        className="user-wrapper"
        style={{ display: "flex", gap: "2rem", justifyContent: "center" }}
      >
        {data.map(d => (
          <User key={d.nim} nama={d.nama} nim={d.nim} email={d.email} />
        ))}
      </div>
    </>
  );
}

export default App;
