function add_first_hourse()
{
    const doc = document.getElementById("hourses_adding")
    let div = document.createElement('div');

    const img1 = document.createElement('img');
    img1.src="/image/1horse.png"
    img1.className = "small_hourse"

    const p1 = document.createElement('p');
    p1.textContent = "1"

    const p2 = document.createElement('p');
    p2.textContent = "Во-первых, оказалось, что все современные домашние лошади произошли от одной группы одомашненных лошадей, т.е. находятся в близком родстве друг с другом."

    div.append(img1, p1, p2)
    div.className = "col-12 col-md-4"
    doc.append(div)
}

function add_second_hourse()
{
    const doc = document.getElementById("hourses_adding")
    let div = document.createElement('div');

    const img1 = document.createElement('img');
    img1.src="/image/2horse.png"
    img1.className = "small_hourse"

    const p1 = document.createElement('p');
    p1.textContent = "2"

    const p2 = document.createElement('p');
    p2.textContent = "Во-вторых, в близком родстве с современными домашними лошадьми оказались древние домашние лошади, вымершие примерно 4200 лет назад, а также дикие лошади из Западной Евразии."

    div.append(img1, p1, p2)
    div.className = "col-12 col-md-4"
    doc.append(div)
}

function add_third_hourse()
{
    const doc = document.getElementById("hourses_adding")
    let div = document.createElement('div');

    const img1 = document.createElement('img');
    img1.src="/image/3horse.png"
    img1.className = "small_hourse"

    const p1 = document.createElement('p');
    p1.textContent = "3"

    const p2 = document.createElement('p');
    p2.textContent = "В-третьих, прояснилось положение лошадей из поселения Ботай*, которые до сих пор считались самыми древними представителями домашних лошадей в мире."

    div.append(img1, p1, p2)
    div.className = "col-12 col-md-4"
    doc.append(div)
}

function add_big_cool_hourse()
{
    try
    {
        var items = Array.from(document.getElementById('horses_big').children)
        var a = items.length

        items[a-1].remove()
    }
    catch (e)
    {
        alert("Картинки кончились. ОООООООООООООПА парам пум пум Пара-парадуемся на своём веку!")
    }

}

function add_big_cool_horse1(){
    const doc = document.getElementById("horses_big")

    const img1 = document.createElement('img');
    img1.src="/image/4horse.png"
    img1.className = "big_horse1"
    
    doc.append(img1)
}

setTimeout(() => document.body.style.background = '', 3000);