import "./index.scss";

const styles = {
  list: {
    listStyle: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    color: "white",
    padding: "1.5rem",
    borderRadius: 10,
  },
  listItem: {
    textDecoration: "none",
    fontSize: 18,
  },
};

interface IProps {
  companyName: string;
  aboutTxt: string;
  isLoggedIn: boolean;
  setIsLoggedIn: (val: boolean) => void;
}

const Navbar = ({
  companyName,
  aboutTxt,
  isLoggedIn,
  setIsLoggedIn,
}: IProps) => {
  return (
    <ul className="navbar-list" style={styles.list}>
      <li>
        <a href="/" style={styles.listItem}>
          {companyName}
        </a>
      </li>
      <li>
        <a href="/" style={styles.listItem}>
          {aboutTxt.toUpperCase()}
        </a>
      </li>
      <li>
        <a href="/" style={styles.listItem}>
          Contact
        </a>
      </li>
      <li>
        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
          {isLoggedIn ? "Logout" : "Login"}
        </button>
      </li>
    </ul>
  );
};

export default Navbar;
