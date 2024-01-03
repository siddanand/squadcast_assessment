export const userSelect =(inputRef, item)=>{
    let n = inputRef.current.value.split("@");
    let text = `${n[0]}`;
    n.map((item, index) => {
      if (index < n.length - 1 && index > 0) text = text + `@${item}`;
    });
    inputRef.current.value = `${text}@${item.first_name} ${item.last_name}`;

}