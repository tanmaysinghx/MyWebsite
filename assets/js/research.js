/*Research Details Table*/

const researchTable = document.querySelector(".main");
const citeTable = document.querySelector(".citeT");

const research = [
    {
        title : "",
        authors : "",
        conferences : "",
        researchYr : 2020,
        image : "",
        vancouver : "",
        bibtex : ""
    },

];

const fillData = () => {
    let output = "";
    research.forEach(
        ({image, title, authors, conferences, researchYr, vancouver, bibtex}) =>
        (output +=`
            <tr> 
            <td class="imgCol"><img src="${image}" class="rImg"></td>
            <td class = "researchTitleName">
            <div><span class="imgResponsive"><img src="${image}" class="imgRes"></span></div>
            <a href="#0" class="paperTitle"> ${title} </a> 
            <div> ${authors} </div> <div class="rConferences"> ${conferences} 
            <div class="researchY">${researchYr}</div>
            </div>
            
            <!--CITE BUTTON-->
            <span class = "resCite">
            <a href="#popup1" class="button button-accent button-small">CITE</a>
            </span>
            </td>

            <td class="researchCite">
            <!--CITE BUTTON-->
            <a href="#popup1" class="button button-accent button-small">CITE</a>
            </td>
            </tr>

            `)
        );
    researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);

const citeData = () => {
    let output = "";
    research.forEach(
        ({vancouver, bibtex}) =>
        (output += `
        <tr> <td class="left-cell"> XYZ </td> <td class="right-cell">${vancouver} </td></tr>
                    <tr> <td class="left-cell"> XYZ </td> <td class="right-cell"> ${bibtex}
                    </td></tr>                     
        `)
    );
    citeTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", citeData);