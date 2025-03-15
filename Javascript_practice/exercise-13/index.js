
function createCard(title, channel_name, views, time_of_post, duration, thumbnail){
    let container = document.querySelector(".container");
    let thumbnail_div = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute('src', thumbnail)
    img.classList.add('img-thumb');
    thumbnail_div.append(img);
    container.append(thumbnail_div);

    let content_div = document.createElement('div');
    content_div.classList.add('content-section');

    let title_div = document.createElement('h3');
    title_div.innerHTML = title;
    title_div.classList.add('title-heading');
    content_div.append(title_div)
    container.append(content_div);

    let information_div = document.createElement('div');
    information_div.classList.add('information-channel')

    let channel_text = document.createElement('span');
    channel_text.innerHTML = `${channel_name}&nbsp`;
    channel_text.classList.add('channel-text');

    information_div.append(channel_text);

    information_div.append(createSeparator());

    let view_text = document.createElement('span');
    view_text.innerHTML = `&nbsp${view_simplify(views)}&nbsp`;
    view_text.classList.add('views-text')

    information_div.append(view_text);

    let month_text = document.createElement('span');
    month_text.innerHTML = `&nbsp${timeDiff(time_of_post)}&nbsp`;
    month_text.classList.add('month-text')

    information_div.append(createSeparator());

    information_div.append(month_text);

    content_div.append(information_div);

    
}

let createSeparator = () => {
    let separator = document.createElement('span');
    separator.innerHTML = '•';
    separator.classList.add('separator');
    return separator;
};


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

createCard("Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1", "CodeWithHarry", 727000, "2023-09-26", "31:20","https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLB6VzxANxt3dHm91HW9lLfDlxvmuA")
