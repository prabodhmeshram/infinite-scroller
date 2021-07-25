export default function ContactCard({name, image}){

    if(!name || name.trim() === ""){
        return "";
    }
    return (
         <div className="card contact-card">
            <div className="row">
                <div className="col-auto">
                    <img src={image} className="img-thumbnail" alt="" />
                </div>
                <div className="col">
                    <div className="card-block px-2 text-center contact-name-content">
                        <h4 className="card-title">{name}</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}