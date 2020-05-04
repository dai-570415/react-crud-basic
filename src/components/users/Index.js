import React from 'react';
import { Link } from 'react-router-dom';
import { db } from '../../Firebase';
import { useCollectionData } from "react-firebase-hooks/firestore";

// functionコンポーネント
const Index = () => {
    const [ list, loading, error ] = useCollectionData(db.collection('users'), { idField: 'docId' });
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error...</div>;

    return (
        <React.Fragment>
            <section>
                <h2>一覧表示</h2>
                {list.map(item => (
                    <div key={item.docId + String(new Date())}>
                        <div>{item.name}</div>
                        <div>{item.email}</div>
                        <div><Link to={`/users/Detail/${item.docId}`}>詳細</Link></div>
                    </div>
                ))}
            </section>
        </React.Fragment>
    );
}

// classコンポーネント
// class Index extends React.Component {

//     state = {
//         list: [],
//     }
    
//     //データ取得
//     getUsers = async () => {
//         const colRef = db.collection('users')
//             .orderBy('createdAt', 'desc')
//             .limit(10);
//         const dates = await colRef.get();
//         const docs = dates.docs.map(doc => doc.data());
//         await this.setState({
//             list: docs,
//         });
//     }

//     //更新時のcalback
//     onCollectionUpdate = () => {
//         this.getUsers();
//     }

//     componentDidMount = async () => {
//         await this.getUsers();
//         this.unsubscribe = db.collection('users').onSnapshot(this.onCollectionUpdate);
//     }

//     render() {
//         return (
//             <React.Fragment>
//                 <section>
//                     <h2>一覧表示</h2>
//                     {this.state.list.map(item => (
//                         <div key={item.docId + String(new Date())}>
//                             <div>{item.name}</div>
//                             <div>{item.email}</div>
//                             <div><Link to={`/users/Detail/${item.docId}`}>詳細</Link></div>
//                         </div>
//                     ))}
//                 </section>
//             </React.Fragment>
//         );
//     }
// }

export default Index;