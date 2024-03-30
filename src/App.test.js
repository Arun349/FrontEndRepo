import { render, screen } from '@testing-library/react';
import UserRegister from './components/UserRegister'; 
import UserLogin from './components/UserLogin';
import '@testing-library/jest-dom/extend-expect';
import Home from './components/Home';
import Appointment from './components/Appointment';
import FinalUserAppointment from './components/FinalUserAppointment';

describe('UserRegister Component', () => {
  test('Test Case-1', () => {
    render(<UserRegister />);
    const element1 = screen.getByTestId("MyHeading");
    expect(element1).toBeInTheDocument();
    expect(element1).toHaveTextContent('Sign Up');
  });

  test('Test Case-2', () => {
    render(<UserRegister />);
    const element1 = screen.getByTestId("Mynav");
    expect(element1).toBeInTheDocument();
    expect(element1).toHaveTextContent('Mobile Repair Web Application');
  });

  test('Test Case-3', () => {
    render(<UserRegister />);
    const element1 = screen.getByTestId("password");
    expect(element1).toBeInTheDocument();
    expect(element1).toHaveTextContent('Password should not be less than 8 characters');
  });

  test('Test Case-4', () => {
    render(<UserRegister />);
    const element1 = screen.getByTestId("password1");
    expect(element1).toBeInTheDocument();
    expect(element1).toHaveTextContent('Password Should not exceeds 14 characters');
  });

  test('Test Case-5', () => {
    render(<UserRegister />);
    const element1 = screen.getByTestId("MyButton");
    expect(element1).toBeInTheDocument();
    expect(element1).toHaveTextContent('Sign Up');
  });


});



describe('UserLogin Component', () => {
  test('Test Case-1', () => {
    render(<UserLogin />);
    const element1 = screen.getByTestId("MyHeading");
    expect(element1).toBeInTheDocument();
    expect(element1).toHaveTextContent('User Sign In');
  });

  test('Test Case-2', () => {
    render(<UserLogin />);
    const element1 = screen.getByTestId("Myloginnav");
    expect(element1).toBeInTheDocument();
    expect(element1).toHaveTextContent('Mobile Repair Web Application');
  });

  test('Test Case-3', () => {
    render(<UserLogin />);
    const element1 = screen.getByTestId("Myscsmsg");
    expect(element1).toBeInTheDocument();
    expect(element1).toHaveTextContent('Login Successful!');
  });

  test('Test Case-4', () => {
    render(<UserLogin />);
    const element1 = screen.getByTestId("Myerrmsg");
    expect(element1).toBeInTheDocument();
    expect(element1).toHaveTextContent('Invalid email!');
  });

  test('Test Case-5', () => {
    render(<UserLogin />);
    const element1 = screen.getByTestId("Myerrmsg2");
    expect(element1).toBeInTheDocument();
    expect(element1).toHaveTextContent('Incorrect Password!');
  });


});



describe('Home Component', () => {
  test('Test Case-1', () => {
    render(<Home />);
    const element1 = screen.getByTestId("Mynav");
    expect(element1).toBeInTheDocument();
    expect(element1).toHaveTextContent('Mobile Repair Web Application');
  });

  test('Test Case-2', () => {
    render(<Home />);
    const element1 = screen.getByTestId("Mytype");
    expect(element1).toBeInTheDocument();
    expect(element1).toHaveTextContent('Mobile Type');
  });

    test('Test Case-3', () => {
      render(<Home />);
      const element1 = screen.getByTestId("Mynav");
      expect(element1).toBeInTheDocument();
      expect(element1).toHaveTextContent('Mobile Repair Web Application');
    });
  
    test('Test Case-4', () => {
      render(<Home />);
      const element1 = screen.getByTestId("Mytype");
      expect(element1).toBeInTheDocument();
      expect(element1).toHaveTextContent('Mobile Type');
    });

});



describe('Appointment Component', () => {
    test('Test Case-1', () => {
      render(<Appointment />);
      const element1 = screen.getByTestId("Mynav");
      expect(element1).toBeInTheDocument();
      expect(element1).toHaveTextContent('Mobile Repair Web Application');
    });

    test('Test Case-1', () => {
      render(<Appointment />);
      const element1 = screen.getByTestId("title");
      expect(element1).toBeInTheDocument();
      expect(element1).toHaveTextContent('Appointment Page');
    });

    test('Test Case-2', () => {
      render(<Appointment />);
      const element1 = screen.getByTestId("button");
      expect(element1).toBeInTheDocument();
      expect(element1).toHaveTextContent('Submit');
    });

    test('Test Case-3', () => {
      render(<Appointment />);
      const element1 = screen.getByTestId("Mynav");
      expect(element1).toBeInTheDocument();
      expect(element1).toHaveTextContent('Mobile Repair Web Application');
    });

    test('Test Case-4', () => {
      render(<Appointment />);
      const element1 = screen.getByTestId("scsmsg");
      expect(element1).toBeInTheDocument();
      expect(element1).toHaveTextContent('Appointment Request Created!');
    });
  });





describe('User Component', () => {
      test('Test Case-1', () => {
        render(<FinalUserAppointment/>);
        const element1 = screen.getByTestId("heading");
        expect(element1).toBeInTheDocument();
        expect(element1).toHaveTextContent('My Appointments');
      });


    });