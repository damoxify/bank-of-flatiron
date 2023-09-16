// Define a function to fetch transactions from the server
const fetchTransactions = async () => {
  try {
    const response = await fetch('http://localhost:8001/transactions');
    if (!response.ok) {
      throw new Error('Failed to fetch data from the server');
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};

const App = () => {
    // Use state to manage transactions
    const [transactionsData, setTransactionsData] = useState([]);
    // const [filteredTransactions, setFilteredTransactions] = useState([]);
    // const [searchTerm, setSearchTerm] = useState('');
  
    // Fetch transactions from the server when the component mounts
    useEffect(() => {
      fetchTransactions().then((data) => {
        setTransactionsData(data);
        // setFilteredTransactions(data);
      });
    }, []);
  
    // Function to add a new transaction to the list
    function addTransaction(newTransaction){
      // Update the local state with the new transaction
      setTransactionsData([...transactionsData, newTransaction]);
      // Filter the displayed transactions based on the current search term
      // filterTransactions(searchTerm);
    };
  
    // Function to filter transactions based on the search term
    // const filterTransactions = (term) => {
    //   setSearchTerm(term);
    //   const filtered = transactionsData.filter((transaction) =>
    //     transaction.description.toLowerCase().includes(term.toLowerCase())
    //   );
    //   setFilteredTransactions(filtered);
    // };
  
      //     fetch("http://localhost:3000/transactions", {
  //   method: "PATCH",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(newItem[date]),
  // })
  //   .then(() => console.log("data updated"))
  //   .catch((err) => console.log(err.message));
    return (
      <div>
        <h1>Bank Transactions</h1>
        <NewItem addTransaction={addTransaction} />
        {/* <input
          type="text"
          placeholder="Search transactions by description"
          value={searchTerm}
          onChange={(e) => filterTransactions(e.target.value)}
        /> */}
        {/* <Items transactions={filteredTransactions} /> */}
        <Items/>
      </div>
    );
  };
  
  export default App;