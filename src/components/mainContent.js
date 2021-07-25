import { useEffect, useState, useRef } from "react"
import ContactCard from "./contactCard"
import { getCharacter } from 'rickmortyapi';
import { Spinner } from "react-bootstrap";

export default function MainContent(){

    const batch = 10;
    const counter = useRef(1);
    const loading = useRef(false);
    const [contacts, setContacts] = useState([]);
    const [loadMore, setLoadMore] = useState(true);

    useEffect(() => {
        async function getCharReponse(){
            return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    resolve(getCharacter(getNextIdArray()))
                },3000);
            })
        }
        
        async function fetchData() {
            loading.current = true;
            const characters = await getCharReponse();
            setContacts(prevState => ([
                ...prevState,
                ...characters.map(({name, image, id})=>({name,image,id}))
            ]))
            
            loading.current = false;
        }

        if(loadMore) fetchData();
        setLoadMore(false);
    }, [loadMore]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    });

    

    function handleScroll(e) {
        const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
        const body = document.body;
        const html = document.documentElement;
        const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
        const windowBottom = windowHeight + window.pageYOffset;
        if (windowBottom >= docHeight) {
            setLoadMore(true);
        }
    }

    function getNextIdArray(){
        let starter = counter.current;
        let idsArray = [];
        let target = counter.current + batch - 1;
        while(starter <= target){
            idsArray.push(starter);
            starter++;
        }
        counter.current = starter;
        return idsArray;
    }

    return (
        <div>
            {contacts.map((contact,i) =>{
                return (
                        <ContactCard key={i} {...contact}/>
                    )
                })
            }
            {loading.current && (<div className="text-center">
                    <Spinner className="fixed-middle float-right" animation="grow" size="lg"/>
                    </div>
                )
            }
        </div>
    )
}