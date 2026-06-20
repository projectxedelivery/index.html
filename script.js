
@import url('https://fonts.googleapis.com/css2?family=Bangers&family=Oswald:wght@400;600;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  background: #050505;
  color: white;
  font-family: 'Oswald', sans-serif;
}

.navbar {
  width: 100%;
  height: 90px;
  background: #050505;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 45px;
  position: fixed;
  top: 0;
  z-index: 1000;
  border-bottom: 1px solid rgba(255, 106, 0, 0.4);
}

.logo {
  font-family: 'Bangers', cursive;
  font-size: 34px;
  line-height: 25px;
  color: white;
  letter-spacing: 2px;
}

.logo span {
  color: #ff6a00;
  font-size: 55px;
  text-shadow: 0 0 18px #ff6a00;
}

.logo small {
  display: block;
  font-size: 18px;
  letter-spacing: 7px;
}

nav {
  display: flex;
  gap: 28px;
}

nav a {
  color: white;
  text-decoration: none;
  font-size: 17px;
  text-transform: uppercase;
  transition: 0.3s;
}

nav a:hover {
  color: #ff6a00;
  text-shadow: 0 0 12px #ff6a00;
}

.phone-btn {
  border: 2px solid #ff6a00;
  padding: 12px 22px;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  box-shadow: 0 0 15px rgba(255, 106, 0, 0.7);
}

.hero {
  min-height: 100vh;
  padding: 150px 60px 60px;
  background:
    linear-gradient(to right, rgba(0,0,0,0.95), rgba(0,0,0,0.45)),
    url('https://images.unsplash.com/photo-1601579111467-6b4e2e1f5c6f?auto=format&fit=crop&w=1600&q=80');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
}

.hero-content {
  max-width: 650px;
}

.hero h1 {
  font-family: 'Bangers', cursive;
  font-size: 90px;
  color: white;
  letter-spacing: 3px;
}

.hero h1 span {
  color: #ff6a00;
  text-shadow: 0 0 25px #ff6a00;
}

.hero h2 {
  font-family: 'Bangers', cursive;
  font-size: 42px;
  margin: 10px 0;
}

.hero p {
  font-size: 22px;
  margin: 25px 0;
}

.platforme {
  display: flex;
  gap: 25px;
  font-size: 34px;
  margin-bottom: 30px;
}

.platforme strong:nth-child(1) {
  color: #35c6ff;
}

.platforme strong:nth-child(2) {
  color: #25d366;
}

.platforme strong:nth-child(3) {
  color: #ffd000;
}

.main-btn {
  display: inline-block;
  background: #ff6a00;
  color: white;
  text-decoration: none;
  padding: 16px 35px;
  border-radius: 8px;
  text-transform: uppercase;
  font-size: 22px;
  font-weight: 700;
  box-shadow: 0 0 25px rgba(255, 106, 0, 0.9);
  transition: 0.3s;
}

.main-btn:hover {
  transform: scale(1.05);
  background: #ff7f1a;
}

.section {
  padding: 90px 60px;
  text-align: center;
}

.section h2 {
  font-family: 'Bangers', cursive;
  font-size: 50px;
  margin-bottom: 25px;
}

.section h2 span {
  color: #ff6a00;
  text-shadow: 0 0 15px #ff6a00;
}

.section p {
  max-width: 850px;
  margin: auto;
  font-size: 22px;
  line-height: 1.6;
}

.dark {
  background: #0b0b0b;
}

.cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
  margin-top: 40px;
}

.card {
  background: #111;
  padding: 30px 20px;
  border: 1px solid rgba(255, 106, 0, 0.5);
  border-radius: 12px;
  box-shadow: 0 0 18px rgba(255, 106, 0, 0.3);
  font-size: 38px;
}

.card h3 {
  font-size: 24px;
  margin: 15px 0;
  color: #ff6a00;
}

.card p {
  font-size: 18px;
}

.cerinte-list {
  list-style: none;
  font-size: 24px;
  line-height: 2;
}

.calculator-box {
  max-width: 450px;
  margin: 35px auto 0;
  background: #111;
  border: 2px solid #ff6a00;
  border-radius: 14px;
  padding: 30px;
  box-shadow: 0 0 25px rgba(255, 106, 0, 0.5);
  text-align: left;
}

.calculator-box label {
  display: block;
  margin-top: 15px;
  font-size: 20px;
}

.calculator-box input {
  width: 100%;
  padding: 14px;
  margin-top: 8px;
  border: none;
  border-radius: 8px;
  font-size: 18px;
}

.calculator-box button {
  width: 100%;
  margin-top: 25px;
  padding: 15px;
  background: #ff6a00;
  border: none;
  color: white;
  font-size: 22px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 700;
}

.calculator-box h3 {
  margin-top: 25px;
  color: #ff6a00;
  text-align: center;
}

.inscriere {
  background:
    linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.9));
}

footer {
  background: #030303;
  border-top: 1px solid rgba(255, 106, 0, 0.5);
  padding: 30px;
  text-align: center;
  font-size: 20px;
}

@media (max-width: 900px) {
  .navbar {
    height: auto;
    padding: 20px;
    flex-direction: column;
    gap: 18px;
  }

  nav {
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
  }

  .hero {
    padding: 190px 25px 60px;
    text-align: center;
  }

  .hero h1 {
    font-size: 65px;
  }

  .hero h2 {
    font-size: 32px;
  }

  .platforme {
    justify-content: center;
    flex-wrap: wrap;
  }

  .cards {
    grid-template-columns: 1fr;
  }

  .section {
    padding: 70px 25px;
  }
}
