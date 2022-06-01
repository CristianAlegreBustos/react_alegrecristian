
//We use this function to get the first object in the picture0 object in every object. Because firebase ddosen't support arrays :/ 


export function GetFirstPicture(listPicture){
    for(const key in listPicture){if (key==0){
        return listPicture[key];        
    }}
}

// capitalize string
function capitalize(str) {
    const lower = str.toLowerCase();
    return str.charAt(0).toUpperCase() + lower.slice(1);
  }

