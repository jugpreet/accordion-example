const AccordionItem =({title, body , openIndex, setIsOpen, keyIn})=>{

    return <div>
        <div className="accordion-title" onClick={()=>setIsOpen(keyIn)}>{title}</div>
       {openIndex && <div className="accordion-body">{body}</div>}
    </div>
}

export default AccordionItem 