

const ItinerariesScreen =(props)=>{
    const id= props.match.params.city

    return(
        <>
        <SectionItineraries id={id}/>
        <div className="container text-center my-5 d-flex justify-content-center">
            <Link to="/" className="text-decoration-none">
                <Button variant="secondary" className="btn-my" >
                Back to Home <BiHome/>
                </Button>
            </Link>
            <Link to="/cities" className="text-decoration-none">
                <Button variant="secondary" className="btn-my" >
                Back to Cities <BiWorld/>
                </Button>
            </Link>
        </div>

       </> 
    ) 
}


export default ItinerariesScreen
