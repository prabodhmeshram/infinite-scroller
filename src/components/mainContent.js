import { useEffect, useState, useRef } from "react"
import ContactCard from "./contactCard"
import { getCharacter } from 'rickmortyapi';

export default function MainContent(){

    const batch = 10;
    const counter = useRef(1);
    const [contacts, setContacts] = useState([]);
    const [loadMore, setLoadMore] = useState(true);

    useEffect(() => {
        setLoadMore(false);
        async function fetchData() {
            const characters = await getCharacter(getNextIdArray());
            setContacts(prevState => ([
                ...prevState,
                ...characters.map(({name, image, id})=>({name,image,id}))
            ]))
        }

        if(loadMore) fetchData();
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
        </div>
    )
}