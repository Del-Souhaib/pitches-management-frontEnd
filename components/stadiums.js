import {Image} from "antd";
import Link from "next/link";


export default function Stadiums(props) {
    console.log(props)
    return (
        <>
            <div className="row">
                <div className="col-lg-12">
                    <div className="class-item">
                        <div className="tab-content">
                            {props.pitches?.map((pitch,index) =>
                                <div className={index==0? "tab-pane fade-in active" : "tab-pane fade-in" } id="class-1" role="tabpanel">
                                    <div className="single-class-item">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <Image
                                                    src={"http://localhost:8080/api/storage?filePath=" + pitch?.images[0]?.name}
                                                    alt=""/>
                                            </div>
                                            <div className="col-lg-5 offset-lg-1">
                                                <div className="class-text">
                                                    <h3>{pitch.name}</h3>
                                                    <p>{pitch.description}</p>
                                                    <Link href={"/client/pitch/reserve/"+pitch.id} className="schedule-btn">View Schedule <i
                                                        className="fa fa-long-arrow-right"/></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-12">
                    <div className="class-author">
                        <ul className="nav" role="tablist">
                            {props.pitches?.map(pitch =>

                                <li>
                                    <a data-toggle="tab" className="active" href="#class-1" role="tab">
                                        <div className="author-text">
                                            <img src={"http://localhost:8080/api/storage?filePath=" + pitch.images[0]?.name} alt=""/>
                                            <h5>{pitch.name}</h5>
                                        </div>
                                    </a>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

