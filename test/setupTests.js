import 'jsdom-global/register';
import * as enzyme from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';

enzyme.configure({ adapter: new ReactSixteenAdapter() });
