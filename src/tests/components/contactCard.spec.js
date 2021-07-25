import { render, screen } from '@testing-library/react';
import  ContactCard from '../../components/contactCard';

test('contact details are present', () => {
    const props = {
        name : "Prabodh",
        image : "../static/rick-morty.jpeg"
    }
    const wrapper = render(<ContactCard {...props}/>);
    expect(wrapper.container.querySelector('.contact-card')).toBeTruthy();
    expect(wrapper.container.querySelector('.card-title')).toBeTruthy();
    const titleElement = screen.queryByText(/prabodh/i);
    expect(titleElement).toBeInTheDocument();
});

test('render nothing if no name provided', ()=>{
    const props = {
        name : "",
        image : "../static/rick-morty.jpeg"
    }
    const wrapper = render(<ContactCard {...props}/>);
    expect(wrapper.container.querySelector('.contact-card')).toBeNull();
    expect(wrapper.container.querySelector('.card-title')).toBeNull();
})
