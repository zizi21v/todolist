import React from "react";
import Checkbox from "./CheckBox";
const TaskList = props => {

const { list, setList } = props;
const onChangeStatus = e => {
const { name, checked } = e.target;
// (E)
const updateList = list.map(item => ({
...item,
done: item.id === name ? checked : item.done
}));
setList(updateList);
};
// (D)
const onClickRemoveItem = e => {
const updateList = list.filter(item => !item.done);
setList(updateList);
};
// (A-2)
const chk = list.map(item => (
<Checkbox key={item.id} data={item} onChange={onChangeStatus} />
));
return (
<div className="todo-list">

{list.length ? chk : "Agrega una tarea!"}

{list.length ? (
<p>
<button className="button blue" onClick={onClickRemoveItem}>
Tarea Completada
</button>
</p>
) : null}
</div>
);
};
export default TaskList;
