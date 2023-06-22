"use client";
const EventExample = () => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Searched!");
  };
  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
    e.preventDefault();
    console.log(`post ${id} has been deleted`);
  };
  return (
    <div className="eventExample">
      <form className="flex gap-3">
        <input
          type="text"
          className="inputText"
          name=""
          placeholder="search for anything...."
          onChange={handleChange}
        />
        <button className="btn" onClick={handleClick}>
          Search
        </button>
      </form>
      <form className="post">
        <h1>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis,
          assumenda!
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
          reiciendis quae fugiat, itaque tempore est sapiente corrupti nam
          libero modi, explicabo voluptatum iste eum sequi voluptas. Omnis
          dignissimos laborum, tempora architecto eveniet a, cum nihil corporis,
          eius nostrum repellendus officiis nesciunt libero autem perspiciatis
          magni necessitatibus id minus eum quaerat?
        </p>
        <button className="smBtn" onClick={(e) => handleDelete(e, 1)}>
          Delete
        </button>
      </form>
    </div>
  );
};

export default EventExample;
