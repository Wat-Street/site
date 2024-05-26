import { Linkedin, Mail } from "lucide-react";

const Socials = () => {
    return (
        <div>
            <ul className="flex gap-10 px-1 py-1">
                <a
                    href="https://instagram.com/wat.street/"
                    target="_blank"
                    rel="norefferer nopener"
                >
                    <li>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="26"
                            height="26"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#e5e5e5"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <rect
                                width="20"
                                height="20"
                                x="2"
                                y="2"
                                rx="5"
                                ry="5"
                            />
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                        </svg>
                    </li>
                </a>
                <a
                    href="https://www.linkedin.com/company/wat-street/"
                    target="_blank"
                    rel="norefferer nopener"
                >
                    <li>
                        <Linkedin size={26} strokeWidth={1.5} color="#e5e5e5" />
                    </li>
                </a>
                <a
                    href="mailto:watstreetwaterloo@gmail.com"
                    target="_blank"
                    rel="norefferer nopener"
                >
                    <li>
                        <Mail size={26} strokeWidth={1.5} color="#e5e5e5" />
                    </li>
                </a>
            </ul>
        </div>
    );
};

export default Socials;
