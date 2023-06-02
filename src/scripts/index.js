import { render } from "./render.js";
import {suggestUsers, posts} from './database.js';

render(suggestUsers, posts)