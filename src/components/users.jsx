import React, { useState } from "react";
import User from "./user";

const Users = ({ users, onDelete, onToggleBookMark }) => {
  return (
    <>
      {users.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Профессия</th>
              <th scope="col">Встретился , раз</th>
              <th scope="col">Оценка</th>
              <th scope="col">Избранное</th>
            
              <th></th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <User
                key={user._id}
                onDelete={onDelete}
                onToggleBookMark={onToggleBookMark}
                user={user}
              />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Users;

/*const Users = () => {
    const [users, setUsers] = useState(api.users.fetchAll());
  
    const handleDelete = (userId) =>
      setUsers(users.filter((user) => user._id !== userId));
  
    const renderPhrace = (number) => {
      const lastOne = Number (number.toString().slice(-1));
      if (number > 4 && number < 15) return "Человек тусанет";
      if ([2,3,4].indexOf(lastOne)>=0) return"человека тусанут";
      if (lastOne===1) return "Человек тусанет";
      
      return "Человек тусанет";
    }
  
    return (
      <>
        <h1><span className={"badge bg-" + (users.length > 0 ? "primary" : "danger")}>
          {users.length > 0
            ? `${users.length} ${renderPhrace(users.length)}  с тобой сегодня`
            : "Никто стобой не тусанет"}
          
        </span></h1> 
  
        {users.length > 0 && (
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Имя</th>
                <th scope="col">Качества</th>
                <th scope="col">Профессия</th>
                <th scope="col">Встретился , раз</th>
                <th scope="col">Оценка</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <td>{user.name}</td>
                  <td>
                    {user.qualities.map((item) => (
                      <span
                        className={"badge m-1 bg-" + item.color}
                        key={item._id}
                      >
                        {item.name}
                      </span>
                    ))}
                  </td>
                  <td>{user.profession.name}</td>
                  <td>{user.completedMeetings}</td>
                  <td>{user.rate}</td>
                  <td>
                    <button
                      className={"btn btn-danger"}
                      onClick={() => handleDelete(user._id)}
                    >
                      Удалить
                    </button>


                  
                  </td>

                 
                 <td>
                 <i className={"bi bi-bookmark"}>
                  onClick={() => handleDelete(user._id)}

                 </i>
                 </td>


                </tr>
              ))}
              
            </tbody>
          </table>
        )}
      </>
    );
  };
  export default Users;*/
