import {Image} from "antd";
import Link from "next/link";


export default function StadiumsList(props) {
    return (
        <>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title text-center text-primary text-uppercase">Our Stadiums</h6>
                        <h1 className="mb-5">Explore Our <span className="text-primary text-uppercase">Stadiums</span></h1>
                    </div>
                    <div className="row g-4">
                        {props.pitches?.map((pitch,index)=>
                            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s" key={index}>
                                <div className="room-item shadow rounded overflow-hidden">
                                    <div className="position-relative">
                                        <img className="img-fluid" src={"http://localhost:8080/api/storage?filePath=" + pitch?.images[0]?.name} alt="" />
                                        <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">{pitch.price} Dh / 1 H</small>
                                    </div>
                                    <div className="p-4 mt-2">
                                        <div className="d-flex justify-content-between mb-3">
                                            <h5 className="mb-0">{pitch.name}</h5>
                                            <div className="ps-2">
                                                <small className="fa fa-star text-primary" />
                                                <small className="fa fa-star text-primary" />
                                                <small className="fa fa-star text-primary" />
                                                <small className="fa fa-star text-primary" />
                                                <small className="fa fa-star text-primary" />
                                            </div>
                                        </div>
                                        <div className="d-flex mb-3">
                                            <small className="border-end me-3 pe-3"><i className="fa fa-bed text-primary me-2" />{pitch.capacity} Player</small>
                                            <small className="border-end me-3 pe-3"><i className="fa fa-bath text-primary me-2" />{pitch.covered? 'Indoor' : 'Outdoor'} </small>
                                            <small><i className="fa fa-wifi text-primary me-2" />{pitch.type} </small>
                                        </div>
                                        <p className="text-body mb-3">{pitch.location+' , '+pitch.ville?.name}</p>
                                        <div className="d-flex justify-content-between">
                                            <Link className="btn btn-sm btn-primary rounded py-2 px-4" href={'/client/stadium/'+pitch.id}>View Detail</Link>
                                            <Link className="btn btn-sm btn-dark rounded py-2 px-4" href={'/client/reserve/'+pitch.id}>Reserve Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </div>

            {/*<div className="row">*/}
            {/*    <div className="col-lg-12">*/}
            {/*        <div className="class-item">*/}
            {/*            <div className="tab-content">*/}
            {/*                {props.pitches?.map((pitch,index) =>*/}
            {/*                    <div className={index==0? "tab-pane fade-in active" : "tab-pane fade-in" } id="class-1" role="tabpanel">*/}
            {/*                        <div className="single-class-item">*/}
            {/*                            <div className="row">*/}
            {/*                                <div className="col-lg-6">*/}
            {/*                                    <Image*/}
            {/*                                        src={"http://localhost:8080/api/storage?filePath=" + pitch?.images[0]?.name}*/}
            {/*                                        alt=""/>*/}
            {/*                                </div>*/}
            {/*                                <div className="col-lg-5 offset-lg-1">*/}
            {/*                                    <div className="class-text">*/}
            {/*                                        <h3>{pitch.name}</h3>*/}
            {/*                                        <p>{pitch.description}</p>*/}
            {/*                                        <Link href={"/client/pitch/reserve/"+pitch.id} className="schedule-btn">View Schedule <i*/}
            {/*                                            className="fa fa-long-arrow-right"/></Link>*/}
            {/*                                    </div>*/}
            {/*                                </div>*/}
            {/*                            </div>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                )}*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}

            {/*<div className="row">*/}
            {/*    <div className="col-lg-12">*/}
            {/*        <div className="class-author">*/}
            {/*            <ul className="nav" role="tablist">*/}
            {/*                {props.pitches?.map(pitch =>*/}

            {/*                    <li>*/}
            {/*                        <a data-toggle="tab" className="active" href="#class-1" role="tab">*/}
            {/*                            <div className="author-text">*/}
            {/*                                <img src={"http://localhost:8080/api/storage?filePath=" + pitch.images[0]?.name} alt=""/>*/}
            {/*                                <h5>{pitch.name}</h5>*/}
            {/*                            </div>*/}
            {/*                        </a>*/}
            {/*                    </li>*/}
            {/*                )}*/}
            {/*            </ul>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </>
    )
}

