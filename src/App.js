import Profile from './Components/Profile/Profile';
import Statistics from './Components/Statistics/Statistics';

import FriendList from './Components/FriendList/FriendList';
import user from './data/user.json';
import stats from './data/statistical-data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';
import TransactionHistory from './Components/TransactionHistory/TransactionHistory';

function App() {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={stats} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
