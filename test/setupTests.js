import 'jsdom-global/register';
import * as enzyme from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';
import chai from 'chai';

enzyme.configure({ adapter: new ReactSixteenAdapter() });

global.chai = chai;
global.expect = chai.expect;
global.assert = chai.assert;
global.shallow = enzyme.shallow;
global.mount = enzyme.mount;
