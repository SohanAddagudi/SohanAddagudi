import React from 'react';
import styled from 'styled-components';


const NavbarContainer = styled.div`
  position: sticky;
  top: 0;
  background-color: #333;
  padding: 10px 0;
  z-index: 100;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;


  @media (max-width: 768px) {
    flex-direction: row;
    align-items: center;
    padding: 10px;
    position: relative;
  }
`;

const Logo = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-left: 20px;
  transition: color 0.3s ease;
  &:hover {
    
    opacity: .5;
  }

  @media (max-width: 768px) {
    margin: 0;
    margin-bottom: 5px;
  }
`;

const TextContainer = styled.div`
  color: #fff;
  font-size: 30px;
  margin-left: 10px;
  padding-left: 20px;
  a {
    color: white;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #787c8c;
    }
  }

  @media (max-width: 768px) {
    font-size: 24px;
    margin: 0;
    padding: 10px;
    text-align: center;
  }
`;

const NavbarContent = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
  margin: 0;
  padding: 20px;
  margin-left: auto;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 0;
    margin-left: 0;

    li {
      margin-bottom: 10px;
    }
  }

  li {
    font-size: 18px;
    color: #fff;
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
      color: #787c8c;
    }

    a {
      color: white;
      text-decoration: none;
      transition: color 0.3s ease;

      &:hover {
        color: #787c8c;
      }
    }
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 15px;
  gap: 20px;

  img {
    width: 40px;
    height: 40px;
    cursor: pointer;
    transition: opacity 0.3s ease;
    border-radius: 50%;

    &:hover {
      opacity: 0.5;
    }
  }

  @media (max-width: 768px) {
    margin: 0;
    margin-top: 10px;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <a href="/">
      <Logo src="https://media.licdn.com/dms/image/D5603AQGU2gV-3G9Jpg/profile-displayphoto-shrink_800_800/0/1680549102661?e=2147483647&v=beta&t=jTmSaag4bsI3y1Vq1oev4BPyMx6aGxMzXg2XaMTRd4I" alt="Logo" />
      </a>
      
      <TextContainer>
        <a href="/">
        Sohan Addagudi
        </a>
      </TextContainer>
      <IconContainer>
        <a href="https://github.com/SohanAddagudi" target="_blank" rel="noopener noreferrer">
          <img src="https://w7.pngwing.com/pngs/914/758/png-transparent-github-social-media-computer-icons-logo-android-github-logo-computer-wallpaper-banner-thumbnail.png" alt="GitHub" />
        </a>
        <a href="https://linkedin.com/in/sohan-addagudi" target="_blank" rel="noopener noreferrer">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAllBMVEUMZMX///8AYcQAWcFDf8nL3PIAWrzQ3vMAYcI0eclZjtAucslAgsz6/v3x9/sgbclOhM8AX8QAYsAAX70AV70AWMLm7vgAXb4sdsw5fsoRbsVmltK6z+iUt+AMZcGDrN3c6fNvnddiltWqwuPA0+r0+vyOrt+lweR9pduuyueUst9Lh81pldd1mtYdbcunxOXO4u7Z4fGRyVlRAAAEKUlEQVR4nO3ce1faMBzG8SblEpSCiUUuQrkMhsCc+v7f3Ko4KjW/yLY0WXOez9mf4Ml3vSW1NYoAAAAAAAAAAAAAAAAAAAAAAAAAAADgYiriIsqU72FURcapGnXHk5aMue+xVCCT6n56x960Z2OpMt8jsozz+Xve0Xqc+h6SXbKzYOeSfex7UBap+J591lThHI3awPxw5KGcVFUj0RayaRrI6UaUj8GTpfA9NivknApkvTC2YdwjC9lc+h6dBWpFB7JFCIXx1FDIRr6HZ0Fq2EkZewjgXNMnLhVH34a+x/fPeMdYOK3/gchvTIFsXf/ZKR+bC+u/DcW1cS/d1f84jFobU+H3ANYXadNU2PU9PAvkd0Ngz/forMgMhU/1P5Xm4h0ZmHQCOAzz68WEPNdsg9iE+ZH4QATeBTApPYqf9PvoKIh99E2qOxQ3jVvf47JHDT5fMl5GAQW+3tNvnF/4N3shwrhJc8Ljw/Q0Q13MJ4GcRc8IORjP99vZfpWlQe2gH3EZx7Gs/4IJAADqQ3DJX/+FM38vqHyKlA5Hhx+Pj49X43468P34CheEiz9Z+pTMlrvFaQ6YbNrblRpKf6vNbHRNKX2yT/kwSVd5XluzGGs//Ew9NfIGS/RYs3X2yUGzp7dpnMYu+zPql1mbp46f+XxeSCkVxrpt8+bmWJgJOTPeYP7m5QkWi4Wye0d94t3m3sNmtFao5OyLvle7zPnRaKlQCb6+IDBfXvddJ1oq5BH5WE7JXd/xwWilUKnJpYGM9a7dPk5mpfCWP18cmO+okdOtaKVwYHxm5ZP1wOWNPBuFneUfBTK2dHkzyEbhwfirco3NxOF+aqPw8rPMbzuHV34bhX+h4e6q6KnQ4ZM6ngrZyNlG9FXo7hfMvgp7zt7o8FXIDq52U2+FznbTKgovmgAsalq4mB0mQqjJYfvler98o6sWhevuYPh2C5jz4WD1ReMPR4soi4W91dmtXy7MK469o7mpvcLn8nRaSWPi9PzH/++FCXvW3LuXpoXxi6MllK1tqHtGLBMd0zccLYNtFR60W8T0wkqv7yTQVuGTfpfLuvRXkms3sxo7hQlx/yy7NayOO3Uq3MXExY148PFY6OZyYafwihqsXNJfGteoMCGXQoYfzxo1KmxSO2kkJvTLcXUq3BreraFnp3UqNLwT3aJPpnUqPNBjTV+CKDScFVv0t+pUaLiytegXq1BoCQoLKNRDYfVQWEChHgqrh8ICCvVQWD0UFlCoh8LqobCAQj0UVg+FBRTqobB6KCygUA+F1UNhAYV6KKweCgso1ENh9VBYQKEeCquHwkKAhe1SIf2UoaFwSP+/dB29FtTvUsbnH+Q3VxTDmxOq+zffskqJiOtFpZda+OV/M6uQKepLof0NWAAAAAAAAAAAAAAAAAAAAAAAAAAAgAr8Aj5RWY0PDbn2AAAAAElFTkSuQmCC" alt="LinkedIn" />
        </a>
      </IconContainer>
      <NavbarContent>
        <li><a href="/#education">Education</a></li>
        <li><a href="/#jobs">Experiences</a></li>
        <li><a href="/#projects">Projects</a></li>
        <li><a href="/#education">Education</a></li>
      </NavbarContent>
    </NavbarContainer>
  );
};

export default Navbar;
