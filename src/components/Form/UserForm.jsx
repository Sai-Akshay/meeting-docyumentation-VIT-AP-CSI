import BackButton from "./BackButton";
import './UserForm.css';

export default function UserForm() {

    // const [people, setPeople] = useState([
        // {imgsrc: "", name: "Akshay", id: 1592134}
    // ])
    return(
        <div className="userform">
            <BackButton />
            <p className="postedby">Posted By: {/*{postedby}*/}</p>
            <p className="title">Title: {/*{title}*/}</p>
            <p className="description">Description:{/*<br /> {description}*/}</p>
            <p className="involved">People involved:</p>
            <div className="peopleList">
                {/* {people.map((person) => ( */}
                    {/* <div className="personTile" key={person.id}> */}
                        {/* <img src={person.imgsrc} alt={person.name}/> */}
                    {/* </div> */}
                {/* ))} */}
                <div className="personTile"><img src="" alt="Image" /></div>
                <div className="personTile"><img src="" alt="Image" /></div>
            </div>

            <p className="allfiles">Available files</p>
            <div className="fileGroup">
                <div className="fileDownload">
                    <p className="tileLabel">SVG</p>
                    <button className="downloadButton">&#8595;</button>
                </div>
                <div className="fileDownload">
                    <p className="tileLabel">PNG</p>
                    <button className="downloadButton">&#8595;</button>
                </div>
                <div className="fileDownload">
                    <p className="tileLabel">Docs</p>
                    <button className="downloadButton">&#8595;</button>
                </div>
                <div className="fileDownload">
                    <p className="tileLabel">Posters</p>
                    <button className="downloadButton">&#8595;</button>
                </div>
            </div>
        </div>
    )
}