import { render } from "./render.js";
import {suggestUsers, posts} from './database.js';
import { createModal } from "./modal.js";



render(suggestUsers, posts)
createModal(posts)