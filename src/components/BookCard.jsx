import altImage from "../assets/altImg.jpg";
console.log(altImage);
const Card = ({ data }) => {
    return (
      <div className="mt-14 flex gap-2" to={data.id}>
        <img
          className="h-44 object-cover rounded-lg border-solid border-yellow-600 hover:border-4"
          src={data?.volumeInfo?.imageLinks?.smallThumbnail.replace(
            /&edge=curl/gi,
            ""
          ) || altImage}
          alt="Cover Not Available"
          onError={(e)=> {
            e.target.onerror = null;
            e.target.src = altImage;
          }}
          
        />
        <div className="px-7 py-4">
          <h2 className="text-lg font-bold text-orange-700">{data?.volumeInfo?.title}</h2>
          <p className="mt-2">
            <span className="font-bold text-orange-700">Author: </span>
            <span className="font-semibold text-orange-700">{data?.volumeInfo?.authors}</span>
          </p>
        </div>
      </div>
    );
  };
  
  export default Card;