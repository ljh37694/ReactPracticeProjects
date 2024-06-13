function CafeCard(props) {
  const { data } = props;

  console.log(data);

  return (
    <div className="cafe-card">
      <a className="cafe-card-title" href={ data.place_url }>{ data.place_name }</a>
      <p>{ data.address_name }</p>
    </div>
  );
}

export default CafeCard;