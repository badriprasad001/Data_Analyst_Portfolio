:root{
  --bg-dark:#050505;
  --bg-dark-2:#0b0b0b;
  --accent:#00f5ff;
  --text:#e6e6e6;
  --card:rgba(255,255,255,0.06);
}

/* Smooth Scroll */
html{
  scroll-behavior:smooth;
}

*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  font-family:'Inter',sans-serif;
}

body{
  background:var(--bg-dark);
  color:var(--text);
  line-height:1.7;
}

/* ========================= */
/* Scroll Progress Bar */
/* ========================= */
#progress-bar{
  position:fixed;
  top:0;
  left:0;
  height:4px;
  width:0;
  background:var(--accent);
  z-index:200;
  transition:width 0.2s ease;
}

/* ========================= */
/* HEADER */
/* ========================= */
header{
  position:fixed;
  width:100%;
  background:rgba(0,0,0,0.8);
  backdrop-filter:blur(10px);
  padding:14px;
  text-align:center;
  z-index:100;
  border-bottom:1px solid rgba(255,255,255,0.05);
}

nav a{
  color:var(--accent);
  margin:0 14px;
  font-size:18px;
  transition:0.3s;
}

nav a:hover{
  opacity:0.7;
  transform:scale(1.1);
}

/* ========================= */
/* HERO */
/* ========================= */
.hero{
  min-height:100vh;
  display:flex;
  align-items:center;
  justify-content:center;
  padding-top:80px;
}

.hero-container{
  max-width:1100px;
  width:100%;
  display:grid;
  grid-template-columns:1.4fr 1fr;
  gap:60px;
  align-items:center;
  padding:0 20px;
}

.hero-left{text-align:left}
.hero-right{display:flex;justify-content:center}

.profile-img{
  width:230px;
  height:230px;
  object-fit:cover;
  border-radius:20px; /* square shape */
  border:4px solid var(--accent);
  box-shadow:0 0 35px rgba(0,245,255,0.5);
  transition:0.4s;
}

.profile-img:hover{
  transform:scale(1.05);
}

/* TEXT */
h1{
  font-size:52px;
  color:var(--accent);
}

h2{
  font-size:34px;
  color:var(--accent);
  margin-bottom:20px;
}

h3{
  font-weight:400;
  letter-spacing:2px;
}

.hero-text{
  max-width:560px;
  margin:14px 0;
}

/* ========================= */
/* BUTTONS */
/* ========================= */
.hero-buttons{
  margin-top:25px;
}

.cta-btn,
.resume-btn{
  display:inline-block;
  padding:14px 38px;
  border-radius:40px;
  font-weight:600;
  transition:0.3s;
  text-decoration:none;
}

.cta-btn{
  background:var(--accent);
  color:#000;
  margin-right:15px;
}

.resume-btn{
  border:2px solid var(--accent);
  color:var(--accent);
}

.cta-btn:hover,
.resume-btn:hover{
  transform:scale(1.05);
  box-shadow:0 0 25px rgba(0,245,255,0.6);
}

/* ========================= */
/* SECTION */
/* ========================= */
.section{
  padding:90px 20px;
  text-align:center;
}

.dark{
  background:var(--bg-dark-2);
}

/* ========================= */
/* ABOUT */
/* ========================= */
.about-wrapper{
  max-width:520px;
  margin:auto;
}

.about-tags{
  margin-top:25px;
}

.about-tags span{
  display:inline-block;
  margin:8px;
  padding:8px 14px;
  border-radius:20px;
  background:var(--card);
  font-size:14px;
  border:1px solid rgba(255,255,255,0.05);
}

/* ========================= */
/* SKILLS */
/* ========================= */
.skill{
  max-width:520px;
  margin:22px auto;
  text-align:left;
}

.skill label{
  display:flex;
  justify-content:space-between;
  font-size:14px;
}

.percent{
  color:var(--accent);
  font-weight:600;
}

.bar{
  background:#1a1a1a;
  border-radius:20px;
  overflow:hidden;
  margin-top:6px;
}

.bar div{
  height:10px;
  width:0;
  background:var(--accent);
  transition:width 1.4s ease;
}

/* ========================= */
/* GRID */
/* ========================= */
.grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
  gap:20px;
  max-width:1000px;
  margin:auto;
}

.card,.edu-card,.contact-card{
  background:var(--card);
  padding:26px;
  border-radius:16px;
  transition:0.3s;
}

.card:hover{
  transform:translateY(-8px);
  box-shadow:0 0 25px rgba(0,245,255,0.3);
}

/* ========================= */
/* CONTACT */
/* ========================= */
.contact-grid{
  display:flex;
  justify-content:center;
  gap:30px;
  flex-wrap:wrap;
}

.contact-card i{
  font-size:26px;
  color:var(--accent);
  margin-bottom:10px;
}

.social{
  margin-top:25px;
}

.social a{
  color:var(--accent);
  font-size:22px;
  margin:0 12px;
  transition:0.3s;
}

.social a:hover{
  transform:scale(1.2);
}

/* ========================= */
/* REVEAL */
/* ========================= */
.reveal{
  opacity:0;
  transform:translateY(20px);
  transition:all 0.8s ease;
}

.reveal.visible{
  opacity:1;
  transform:translateY(0);
}


/* ========================= */
/* FOOTER */
/* ========================= */
footer{
  text-align:center;
  padding:20px;
  background:#000;
  font-size:14px;
  border-top:1px solid rgba(255,255,255,0.05);
}

/* ========================= */
/* RESPONSIVE */
/* ========================= */
@media(max-width:900px){
  .hero-container{
    grid-template-columns:1fr;
    text-align:center;
  }

  .hero-left{text-align:center}
}
/*------------------------*/
/* ========================= */
/* NAV STRUCTURE */
/* ========================= */
nav{
  display:flex;
  justify-content:center;
  align-items:center;
  position:relative;
}

/* Hide menu button on desktop */
.menu-toggle{
  display:none;
  position:absolute;
  left:15px;
  font-size:22px;
  color:var(--accent);
  cursor:pointer;
}

/* Navigation links container */
.nav-links{
  display:flex;
  align-items:center;
}

/* ========================= */
/* MOBILE NAVIGATION */
/* ========================= */
@media(max-width:768px){

  nav{
    justify-content:center;
  }

  .menu-toggle{
    display:block;
  }

  .nav-links{
    position:fixed;
    top:60px;
    left:-100%;
    flex-direction:column;
    width:200px;
    background:rgba(0,0,0,0.95);
    height:100vh;
    padding-top:30px;
    transition:0.3s ease;
    border-right:1px solid rgba(255,255,255,0.05);
  }

  .nav-links a{
    margin:20px 0;
    font-size:20px;
  }

  .nav-links.active{
    left:0;
  }
}
