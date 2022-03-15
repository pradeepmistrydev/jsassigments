let PasswordNode = document.getElementById("Password");
let EmailNode = document.getElementById("Email");
let SubmitNode = document.getElementById("Submit");
let RESETNode = document.getElementById("RESET");
let border1 = "1px solid red";
let border2 = "1px solid green";
function validate4() {
    let Password = PasswordNode.value;
    Tdnode4.textContent = "";
    let regExp = new RegExp("/^[A-Za-z]\w{7,14}$/");
    if (Password == "") {
        Tdnode4.textContent = "Please add your password";
        PasswordNode.style.border = border1;
    }
    else if (regExp.test(Password) == false) {
        let Spannode = document.createElement("span");
        let olnode = document.createElement("ol");
        let linode1 = document.createElement("li");
        linode1.textContent("hi");
        let linode2 = document.createElement("li");
        linode2.textContent("hello");
        let linode3 = document.createElement("li");
        linode3.textContent("hel");
        olnode.append(linode1, linode2, linode3);
        Tdnode4.append(olnode, Spannode);
        PasswordNode.style.border = border1;

    }
    else {
        PasswordNode.style.border = "2px solid green";
    }
}
