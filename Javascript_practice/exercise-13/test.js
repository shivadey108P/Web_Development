let view_simplify = (views) =>{
    if(views>1000 && views < 10000)
        {
            let new_views = parseFloat((views.toString()).slice(0,2));
            new_views = (new_views/10).toFixed(1);
            return `${new_views.toString()}k`;
        }
    else if(views>10000 && views < 100000)
    {
        let new_views = parseFloat((views.toString()).slice(0,3));
        new_views = (new_views/10).toFixed(1);
        return `${new_views.toString()}k`;
    }
    else if (views > 100000 && views <1000000){
        return `${(views.toString()).slice(0,3)}k`;
    }
    else if(views >= 1000000 && views < 10000000){
        let new_views = parseFloat((views.toString()).slice(0,2));
        new_views = (new_views/10).toFixed(1);
        return `${new_views.toString()}M`;
    }
    else if(views >=10000000){
        let new_views = parseFloat((views.toString()).slice(0,3));
        new_views = (new_views/10).toFixed(1);
        return `${new_views.toString()}M`;
    }
}

console.log(view_simplify(7270000));

let timeDiff = (uploadedDate)=>{
    const today = new Date();
    const upload = new Date(uploadedDate);
    const diffTime = Math.abs(today-upload);
    const diffMonth = Math.floor(diffTime/(1000*60*60*24*30));
    if(diffMonth>=12)
    {
        if((diffMonth/12) < 2)
        {
            return `${Math.ceil(diffMonth/12)} year ago`;
        }
        else
        {
            return `${Math.ceil(diffMonth/12)} years ago`;
        }
    }
    else if(diffMonth > 1){
        return `${diffMonth} months ago`;
    }
    else{
        return `${diffMonth} month ago`;
    }
}

console.log(timeDiff("2025-01-01"));