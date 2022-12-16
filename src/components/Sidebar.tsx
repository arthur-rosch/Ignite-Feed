import { PencilLine } from "phosphor-react";
import { Avatar } from "./Avatar";
import style from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={style.sidebar}>
      <img
        className={style.cover}
        src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
      />
      <div className={style.profile}>
        <Avatar src="https://avatars.githubusercontent.com/u/65727437?v=4" />
        <strong>Arthur Rosch</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Edite o seu Perfil
        </a>
      </footer>
    </aside>
  );
}
