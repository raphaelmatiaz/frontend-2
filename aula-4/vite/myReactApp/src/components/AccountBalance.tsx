// Teste Unitario 2
function AccountBalance(props: {balance: number}) {
  return (
    <div>
      <h2>Account Balance</h2>
      <h3>${props.balance}</h3>
    </div>
  );
}

export default AccountBalance;