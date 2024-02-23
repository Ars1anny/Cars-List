import css from './todolist.module.css'
import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/features/todoSlice";
import { data } from '../data/data';

const TodoList: FC = () => {
	const [brand, setBrand] = useState('');
	const [image, setImage] = useState('');
	const [year, setYear] = useState('');

	const dispatch = useDispatch();

	const handleAdd = () => {
		dispatch(addTodo({ brand, image, year }));
		setBrand('');
		setImage('');
		setYear('');
	};

	
	return (
		<>
			<main className={css.main}>
				<input className={css.input}
					type='text'
					value={brand}
					placeholder='Brand & model'
					onChange={(e) => setBrand(e.target.value)}
					/>
				<input className={css.input}
					type='url'
					value={image}
					placeholder='URL'
					onChange={(e) => setImage(e.target.value)}
					/>
				<input className={css.input}
					type='number'
					value={year}
					placeholder='Year'
					min={2000}
					max={2024}
					onChange={(e) => setYear(e.target.value)}
				/>
				<button className={css.button} onClick={handleAdd}>ADD</button>

				{data.map((item) => (
					<div className={css.container} key={item.id}>
						<div className={css.box}>
						<h3 className={css.brand}>{item.brand}</h3>
						<img className={css.img} src={item.image} alt={item.brand} />
						<p className={css.year}>{item.year}</p>
						<button className={css.button}>DELETE</button>
						</div>
					</div>
				))}
			</main>
		</>
	);
};

export default TodoList;
