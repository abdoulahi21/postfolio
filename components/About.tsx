import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Code,
  Database,
  Globe,
  Smartphone,
  GraduationCap,
  Calendar,
} from "lucide-react";

export default function About() {
  const skills = [
    {
      name: "Vue.js",
      category: "Frontend",
      logo: (
        <svg
          className="w-8 h-8"
          viewBox="0 0 261.76 226.69"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0L130.88 226.69L261.76 0H200.47L130.88 113.34L61.29 0H0Z"
            fill="#41B883"
          />
          <path
            d="M61.29 0L130.88 113.34L200.47 0H160.88L130.88 52.01L100.88 0H61.29Z"
            fill="#35495E"
          />
        </svg>
      ),
    },
    {
      name: "Angular",
      category: "Frontend",
      logo: (
        <svg
          className="w-8 h-8"
          viewBox="0 0 250 250"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="#DD0031" d="M125 0L5 45l18 135 102 70 102-70 18-135z" />
          <path fill="#C3002F" d="M125 0v250l102-70 18-135z" />
          <path
            fill="#FFF"
            d="M125 35l-56 139h22l10-26h48l10 26h22zm0 37l18 48h-36z"
          />
        </svg>
      ),
    },
    {
      name: "Java",
  category: "Language",
  logo: (
    <svg className="w-8 h-8" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fillRule="evenodd">
        <path
          fill="#5382A1"
          d="M38.66 99.56s-4.2 2.45 2.99 3.28c8.74 1 13.21.86 22.88-.96 0 0 2.53 1.58 6.07 2.95-21.53 9.22-48.64-.54-31.94-5.27zm-2.66-11.27s-4.71 3.48 2.48 4.22c9.31.96 16.7 1.04 29.47-1.4 0 0 1.76 1.78 4.54 2.76-26.15 7.66-55.33.6-36.49-5.58zm54.88 13.13s3.12 2.57-3.44 4.56c-12.5 3.79-52.09 4.93-63.05.15-3.95-1.72 3.48-4.1 5.83-4.6 2.45-.53 3.85-.43 3.85-.43-4.44-3.12-28.74 6.15-12.35 8.82 44.72 7.27 81.42-3.27 70.16-8.5zm-49.97-24.18s-20.38 4.83-7.21 6.6c5.55.74 16.61.57 27.02-.29 8.46-.68 16.94-2.12 16.94-2.12s-2.98 1.28-5.15 2.75c-20.78 5.47-60.94.29-49.39-4.99 9.79-4.51 17.79-1.95 17.79-1.95zm37.24 9.43c21.12-11 11.37-21.57 4.55-20.15-1.67.35-2.42.65-2.42.65s.62-.98 1.8-1.4c13.48-4.73 23.84 14.02-4.35 21.55 0 0 .33-.3.42-.65zm-14.93-24.33c3.23 3.72-0.84 7.07-.84 7.07s8.19-4.23 4.43-9.51c-3.51-4.9-6.2-7.32 8.37-15.66 0.01 0.01-22.9 5.73-12.04 18.1zm11.57 46.2c-19.93 4.14-45.12 3.66-59.74 1.01 0 0 3.02 2.5 18.69 3.57 23.67 1.54 60.13-0.85 60.93-12.25 0 0-1.65 4.21-19.88 7.67z"
        />
        <path
          fill="#E76F00"
          d="M72.2 30.41c5.04 5.8-1.32 11.02-1.32 11.02s12.82-6.64 6.95-15.01c-5.51-7.83-9.74-11.7 13.13-25.42 0 0-36.02 9.01-18.76 29.41z"
        />
      </g>
    </svg>
      ),
    },
    {
      name: "Spring Boot",
  category: "Backend",
  logo: (
    <svg className="w-8 h-8" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M128 0c17.7 0 35.4 4.4 51.2 12.6l70.2 40.4C262.6 62.9 272 77.7 272 93.7v80.6c0 15.9-9.4 30.7-22.6 40.7l-70.2 40.4c-15.8 8.2-33.5 12.6-51.2 12.6s-35.4-4.4-51.2-12.6L6.6 215C-6.6 205-16 190.2-16 174.3V93.7C-16 77.7-6.6 62.9 6.6 52.9L76.8 12.6C92.6 4.4 110.3 0 128 0z"
        fill="#6DB33F"
      />
      <path
        d="M144.4 163.7c0-9.1-7.3-16.4-16.4-16.4s-16.4 7.3-16.4 16.4 7.3 16.4 16.4 16.4 16.4-7.3 16.4-16.4zm-16.4-61c-34.1 0-61.7 27.6-61.7 61.7s27.6 61.7 61.7 61.7 61.7-27.6 61.7-61.7-27.6-61.7-61.7-61.7zm0 114.1c-28.9 0-52.4-23.5-52.4-52.4s23.5-52.4 52.4-52.4 52.4 23.5 52.4 52.4-23.5 52.4-52.4 52.4z"
        fill="#fff"
      />
    </svg>
      ),
    },
    {
      name: "Python",
      category: "Language",
      logo: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <path
            d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.26-.02.21-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25c-.2 0-.38.09-.5.24-.12.14-.18.33-.18.52 0 .18.06.37.18.51.12.15.3.24.5.24.2 0 .38-.09.5-.24.12-.14.18-.33.18-.51 0-.19-.06-.38-.18-.52-.12-.15-.3-.24-.5-.24z"
            fill="#3776AB"
          />
          <path
            d="M21.1 11.1l.28.06.32.12.35.18.36.26.36.36.35.46.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.26.02-.21.01h-5.84l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06h2.09l.14-.01.21-.03.28-.07.32-.12.35-.18.36-.26.36-.36.35-.46.32-.59.28-.73.21-.88.14-1.05.05-1.23-.06-1.22-.16-1.04-.24-.87-.32-.71-.36-.57-.4-.44-.42-.33-.42-.24-.4-.16-.36-.1-.32-.05-.26-.02-.21-.01H9.23l-.69.05-.59.14-.5.21-.41.28-.33.32-.27.35-.2.36-.15.36-.1.35-.07.32-.04.28-.02.21v5.84l.05.69.14.59.21.5.28.41.32.33.35.27.36.2.37.15.35.1.32.07.28.04.21.02h5.84l.69-.05.59-.14.5-.22.41-.27.33-.32.27-.35.2-.36.15-.37.1-.35.07-.32.04-.27.02-.21V16.94h2.09l.14.01z"
            fill="#FFD43B"
          />
        </svg>
      ),
    },
    {
      name: "PostgreSQL",
      category: "Database",
      logo: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <path
            d="M23.111 5.441c-.171-1.297-1.236-2.276-2.563-2.362-.34-.022-.68-.018-1.018.013-.679.063-1.347.168-2.002.322-.394-1.298-1.187-2.51-2.29-3.399C14.03-.503 12.582-.695 11.155.146c-.712.42-1.334.974-1.836 1.635-.502-.661-1.124-1.215-1.836-1.635C6.056-.695 4.608-.503 3.4.985 2.297 1.874 1.504 3.086 1.11 4.384c-.655-.154-1.323-.259-2.002-.322-.338-.031-.678-.035-1.018-.013C-1.237 4.135-2.302 5.113-2.473 6.41c-.171 1.297.582 2.592 1.81 3.124.31.134.632.241.964.32-.095.358-.145.723-.15 1.09-.021 1.564.56 3.093 1.64 4.31 1.08 1.217 2.59 1.998 4.259 2.203 1.669.205 3.373-.2 4.802-1.141.714-.47 1.345-1.056 1.861-1.734.516.678 1.147 1.264 1.861 1.734 1.429.941 3.133 1.346 4.802 1.141 1.669-.205 3.179-.986 4.259-2.203 1.08-1.217 1.661-2.746 1.64-4.31-.005-.367-.055-.732-.15-1.09.332-.079.654-.186.964-.32 1.228-.532 1.981-1.827 1.81-3.124z"
            fill="#336791"
          />
        </svg>
      ),
    },
    {
       name: "MySQL",
  category: "Database",
  logo: (
    <svg className="w-8 h-8" viewBox="0 0 512 512" fill="none">
      <path
        d="M448.5 340.3c-19.6-24.6-49.7-32.4-75.5-39.3-20.2-5.4-39.3-10.6-52.1-22.1-13.4-12.1-16.4-28.5-20.2-48.1-4.1-21.2-8.7-45.3-27.2-65.7-13.6-14.9-29.5-21.8-42.5-25.3l-7.6 18.9c10.7 3 24.4 8.8 34.9 20.4 14.4 15.7 18.1 35.9 22 56.3 3.7 19.2 7.5 39 23.6 54.2 16.4 15.5 38.3 21.1 59.5 26.7 23.2 6.1 45.2 11.9 60.2 30.8 14.7 18.5 14.4 38.7 13.3 49.4l20.7 1.9c.8-8.2 2.6-35.2-20.5-63.2z"
        fill="#00758F"
      />
      <path
        d="M269.8 222.3c-6.1-20.7-12.5-42.1-31.4-56.7-12.4-9.6-26.5-14.1-38.3-16.1l-3.3 20.1c8.7 1.4 19.4 5.2 28.6 12.2 13.3 10.2 18.3 26.6 23.2 42.7 1.2 3.9 2.5 7.8 3.8 11.8l20.1-6.3c-0.9-2.5-1.8-5.1-2.7-7.7z"
        fill="#F29111"
      />
      <path
        d="M160.6 159.3c-19.5-15.2-47.1-22.7-69.6-9.2-21.3 12.8-31.5 40.4-30.6 82.1.6 28.2 8.1 57.8 23.9 83.3 16.1 25.9 39.1 47.7 66.2 62.7 24.6 13.7 52.8 20.5 81.2 20.4l-1-20.3c-49.4.2-93.7-25.1-119.6-66.3-13.3-21.4-20.3-46.3-20.9-71.5-.8-34.4 6.4-56.9 20.7-65.5 13.8-8.3 33.5-1.6 47.4 9.3 10.5 8.1 21.4 20.2 26.5 36.8l19.5-6.7c-6.6-19.4-20-36.5-43.7-54.1z"
        fill="#00758F"
      />
    </svg>
      ),
    },
    {
      name: "Tailwind CSS",
      category: "Styling",
      logo: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <path
            d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zM6.001 12c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"
            fill="#06B6D4"
          />
        </svg>
      ),
    },
    {
      name: "Docker",
      category: "DevOps",
      logo: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <path
            d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185zm-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.186zm0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.186zm-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.186zm-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.888c0 .102.084.185.186.186zm5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185zm-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185zm-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185z"
            fill="#0db7ed"
          />
          <path
            d="M24 10.314c-.145-1.25-.834-2.317-1.96-3.033-.328-.208-.69-.368-1.073-.477l-.17-.05-.05-.169c-.196-.659-.76-1.165-1.413-1.269a7.654 7.654 0 00-1.602-.105c-.493.054-.717.165-.717.165v.495s.224-.111.717-.165c.493-.054 1.1-.033 1.602.105.503.138.717.61.717.61l.05.169.17.05c.383.109.745.269 1.073.477.328.208.612.463.834.748.222.285.382.6.477.93.095.33.126.675.092 1.018-.034.343-.121.677-.255.984l-.134.308.308-.134c.307-.134.641-.221.984-.255.343-.034.688-.003 1.018.092.33.095.645.255.93.477.285.222.54.506.748.834.208.328.368.69.477 1.073.109.383.159.784.147 1.186-.012.402-.082.801-.207 1.184-.125.383-.302.743-.523 1.062-.221.319-.486.598-.783.825-.297.227-.627.402-.973.516-.346.114-.709.166-1.073.153-.364-.013-.723-.085-1.062-.214-.339-.129-.653-.313-.927-.544-.274-.231-.506-.507-.686-.815-.18-.308-.307-.646-.375-.997-.068-.351-.077-.711-.027-1.066.05-.355.15-.701.295-1.023.145-.322.333-.618.555-.874.222-.256.475-.471.747-.635.272-.164.565-.276.865-.331.3-.055.605-.052.904.009.299.061.589.172.857.328l.268.156-.156-.268c-.156-.268-.267-.558-.328-.857-.061-.299-.064-.604-.009-.904.055-.3.167-.593.331-.865.164-.272.379-.525.635-.747.256-.222.552-.41.874-.555.322-.145.668-.245 1.023-.295.355-.05.715-.041 1.066.027.351.068.689.195.997.375.308.18.584.412.815.686.231.274.415.588.544.927.129.339.201.698.214 1.062.013.364-.039.727-.153 1.073-.114.346-.289.676-.516.973-.227.297-.506.562-.825.783-.319.221-.679.398-1.062.523-.383.125-.782.195-1.184.207-.402.012-.803-.038-1.186-.147-.383-.109-.745-.269-1.073-.477-.328-.208-.612-.463-.834-.748-.222-.285-.382-.6-.477-.93-.095-.33-.126-.675-.092-1.018.034-.343.121-.677.255-.984l.134-.308-.308.134c-.307.134-.641.221-.984.255-.343.034-.688.003-1.018-.092-.33-.095-.645-.255-.93-.477-.285-.222-.54-.506-.748-.834-.208-.328-.368-.69-.477-1.073-.109-.383-.159-.784-.147-1.186.012-.402.082-.801.207-1.184.125-.383.302-.743.523-1.062.221-.319.486-.598.783-.825.297-.227.627-.402.973-.516.346-.114.709-.166 1.073-.153.364.013.723.085 1.062.214.339.129.653.313.927.544.274.231.506.507.686.815.18.308.307.646.375.997.068.351.077.711.027 1.066-.05.355-.15.701-.295 1.023-.145.322-.333.618-.555.874-.222.256-.475.471-.747.635-.272.164-.565.276-.865.331-.3.055-.605.052-.904-.009-.299-.061-.589-.172-.857-.328l-.268-.156.156.268c.156.268.267.558.328.857.061.299.064.604.009.904-.055.3-.167.593-.331.865-.164.272-.379.525-.635.747-.256.222-.552.41-.874.555-.322.145-.668.245-1.023.295-.355.05-.715.041-1.066-.027-.351-.068-.689-.195-.997-.375-.308-.18-.584-.412-.815-.686-.231-.274-.415-.588-.544-.927-.129-.339-.201-.698-.214-1.062-.013-.364.039-.727.153-1.073.114-.346.289-.676.516-.973.227-.297.506-.562.825-.783.319-.221.679-.398 1.062-.523.383-.125.782-.195 1.184-.207.402-.012.803.038 1.186.147.383.109.745.269 1.073.477.328.208.612.463.834.748.222.285.382.6.477.93.095.33.126.675.092 1.018-.034.343-.121.677-.255.984l-.134.308.308-.134c.307-.134.641-.221.984-.255.343-.034.688-.003 1.018.092.33.095.645.255.93.477.285.222.54.506.748.834.208.328.368.69.477 1.073.109.383.159.784.147 1.186-.012.402-.082.801-.207 1.184-.125.383-.302.743-.523 1.062-.221.319-.486.598-.783.825-.297.227-.627.402-.973.516-.346.114-.709.166-1.073.153-.364-.013-.723-.085-1.062-.214-.339-.129-.653-.313-.927-.544-.274-.231-.506-.507-.686-.815-.18-.308-.307-.646-.375-.997-.068-.351-.077-.711-.027-1.066.05-.355.15-.701.295-1.023.145-.322.333-.618.555-.874.222-.256.475-.471.747-.635.272-.164.565-.276.865-.331.3-.055.605-.052.904.009.299.061.589.172.857.328l.268.156-.156-.268c-.156-.268-.267-.558-.328-.857-.061-.299-.064-.604-.009-.904.055-.3.167-.593.331-.865.164-.272.379-.525.635-.747.256-.222.552-.41.874-.555.322-.145.668-.245 1.023-.295.355-.05.715-.041 1.066.027.351.068.689.195.997.375.308.18.584.412.815.686.231.274.415.588.544.927.129.339.201.698.214 1.062.013.364-.039.727-.153 1.073-.114.346-.289.676-.516.973-.227.297-.506.562-.825.783-.319.221-.679.398-1.062.523-.383.125-.782.195-1.184.207-.402.012-.803-.038-1.186-.147-.383-.109-.745-.269-1.073-.477-.328-.208-.612-.463-.834-.748-.222-.285-.382-.6-.477-.93-.095-.33-.126-.675-.092-1.018.034-.343.121-.677.255-.984l.134-.308-.308.134c-.307.134-.641.221-.984.255-.343.034-.688.003-1.018-.092-.33-.095-.645-.255-.93-.477-.285-.222-.54-.506-.748-.834-.208-.328-.368-.69-.477-1.073-.109-.383-.159-.784-.147-1.186.012-.402.082-.801.207-1.184.125-.383.302-.743.523-1.062.221-.319.486-.598.783-.825.297-.227.627-.402.973-.516.346-.114.709-.166 1.073-.153.364.013.723.085 1.062.214.339.129.653.313.927.544.274.231.506.507.686.815.18.308.307.646.375.997.068.351.077.711.027 1.066-.05.355-.15.701-.295 1.023-.145.322-.333.618-.555.874-.222.256-.475.471-.747.635-.272.164-.565.276-.865.331-.3.055-.605.052-.904-.009-.299-.061-.589-.172-.857-.328l-.268-.156.156.268c.156.268.267.558.328.857.061.299.064.604.009.904-.055.3-.167.593-.331.865-.164.272-.379.525-.635.747-.256.222-.552.41-.874.555-.322.145-.668.245-1.023.295-.355.05-.715.041-1.066-.027-.351-.068-.689-.195-.997-.375-.308-.18-.584-.412-.815-.686-.231-.274-.415-.588-.544-.927-.129-.339-.201-.698-.214-1.062-.013-.364.039-.727.153-1.073.114-.346.289-.676.516-.973.227-.297.506-.562.825-.783.319-.221.679-.398 1.062-.523.383-.125.782-.195 1.184-.207.402-.012.803.038 1.186.147.383.109.745.269 1.073.477.328.208.612.463.834.748.222.285.382.6.477.93.095.33.126.675.092 1.018-.034.343-.121.677-.255.984l-.134.308.308-.134c.307-.134.641-.221.984-.255.343-.034.688-.003 1.018.092.33.095.645.255.93.477.285.222.54.506.748.834.208.328.368.69.477 1.073.109.383.159.784.147 1.186z"
            fill="#0db7ed"
          />
        </svg>
      ),
    },
    {
      name: "AWS",
      category: "Cloud",
      logo: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <path
            d="M6.76 10.04c0 .29.03.54.09.71.06.18.14.37.26.58.04.06.06.13.06.18 0 .08-.05.16-.14.24l-.48.32c-.07.05-.14.07-.2.07-.08 0-.16-.04-.24-.1-.11-.11-.2-.23-.29-.38-.08-.15-.16-.31-.25-.47-.62.73-1.4 1.1-2.35 1.1-.67 0-1.2-.19-1.6-.57-.39-.38-.59-.89-.59-1.53 0-.68.24-1.23.72-1.64.48-.42 1.12-.63 1.91-.63.26 0 .54.02.83.06.3.04.6.1.91.18v-.58c0-.61-.13-1.03-.38-1.27-.26-.24-.69-.36-1.29-.36-.28 0-.57.03-.86.1-.3.07-.59.15-.88.26-.13.06-.22.09-.28.1-.06.02-.1.02-.13.02-.11 0-.17-.08-.17-.25v-.39c0-.13.02-.22.06-.28.04-.06.11-.11.21-.16.28-.14.61-.26 1-.36.4-.1.82-.15 1.26-.15.76 0 1.31.18 1.68.53.36.35.54.89.54 1.6v2.48zm-3.24 1.25c.26 0 .52-.05.8-.14.28-.1.53-.27.74-.5.13-.14.22-.3.28-.49.06-.18.09-.41.09-.67v-.34c-.25-.06-.49-.1-.73-.13-.25-.02-.49-.03-.75-.03-.54 0-.93.1-1.19.32-.26.22-.39.52-.39.91 0 .36.09.63.28.82.19.19.48.28.87.28z"
            fill="#FF9900"
          />
          <path
            d="M17.37 11.36c-.17 0-.28-.03-.35-.08-.07-.05-.13-.17-.18-.35l-2.02-6.66c-.05-.18-.08-.3-.08-.37 0-.15.07-.23.22-.23h.9c.18 0 .3.03.36.08.07.05.12.17.17.35l1.44 5.68 1.34-5.68c.04-.18.1-.3.16-.35.07-.05.2-.08.37-.08h.73c.17 0 .3.03.37.08.07.05.12.17.16.35l1.35 5.75 1.48-5.75c.05-.18.1-.3.17-.35.07-.05.19-.08.36-.08h.85c.15 0 .23.07.23.23 0 .05-.01.1-.02.16-.01.06-.03.13-.06.21l-2.07 6.66c-.05.18-.11.3-.18.35-.07.05-.19.08-.35.08h-.78c-.17 0-.3-.03-.37-.08-.07-.05-.13-.17-.16-.35L17.44 6.7l-1.32 4.93c-.04.18-.1.3-.16.35-.07.05-.2.08-.37.08h-.78z"
            fill="#FF9900"
          />
          <path
            d="M21.69 18.3c-2.47 1.82-6.06 2.79-9.14 2.79-4.32 0-8.22-1.6-11.17-4.26-.23-.21-.02-.49.25-.33 3.16 1.84 7.07 2.95 11.11 2.95 2.72 0 5.71-.56 8.46-1.73.41-.18.76.27.37.58z"
            fill="#FF9900"
          />
          <path
            d="M22.67 17.14c-.32-.41-2.1-.19-2.9-.1-.24.03-.28-.18-.06-.33 1.42-1 3.75-.71 4.02-.38.27.34-.07 2.68-1.4 3.8-.2.17-.4.08-.31-.15.3-.76.98-2.43.65-2.84z"
            fill="#FF9900"
          />
        </svg>
      ),
    },
    {
      name: "Git",
      category: "Tools",
      logo: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <path
            d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"
            fill="#DE4C36"
          />
        </svg>
      ),
    },
    {
      name: "Figma",
      category: "Design",
      logo: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <path
            d="M8 24c2.208 0 4-1.792 4-4v-4H8c-2.208 0-4 1.792-4 4s1.792 4 4 4z"
            fill="#0ACF83"
          />
          <path
            d="M4 12c0-2.208 1.792-4 4-4h4v8H8c-2.208 0-4-1.792-4-4z"
            fill="#A259FF"
          />
          <path
            d="M4 4c0-2.208 1.792-4 4-4h4v8H8C5.792 8 4 6.208 4 4z"
            fill="#F24E1E"
          />
          <path
            d="M12 0h4c2.208 0 4 1.792 4 4s-1.792 4-4 4h-4V0z"
            fill="#FF7262"
          />
          <path
            d="M20 12c0 2.208-1.792 4-4 4s-4-1.792-4-4 1.792-4 4-4 4 1.792 4 4z"
            fill="#1ABCFE"
          />
        </svg>
      ),
    },
  ];

  const education = [
    {
      degree: "Master en Informatique",
      school:
        "INSTITUT GATE D’INFORMATIQUE ET DE GESTION-PRIVE",
      period: "2025 - 2026",
      description: "Spécialisation en développement web et mobile",
      level: 3,
    },
    {
      degree: "Licence en Génie Logiciel",
      school: "Institut Supérieur d'Informatique",
      period: "2024 - 2025",
      description: "Formation générale en programmation et systèmes",
      level: 2,
    },
    {
      degree: "Baccalauréat Scientifique",
      school: "Ecole privée les Academiciens",
      period: "2020 - 2021",
      description: "Option Mathématiques et Sciences",
      level: 1,
    },
  ];

  const experiences = [
    {
      title: "Senior Full-Stack Developer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      description:
        "Lead development of scalable web applications using React, Node.js, and cloud technologies.",
      icon: <Code className="h-5 w-5" />,
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency Co.",
      period: "2020 - 2022",
      description:
        "Developed responsive websites and web applications for various clients using modern frontend technologies.",
      icon: <Globe className="h-5 w-5" />,
    },
    {
      title: "Mobile App Developer",
      company: "StartupXYZ",
      period: "2019 - 2020",
      description:
        "Built cross-platform mobile applications using React Native and integrated with backend APIs.",
      icon: <Smartphone className="h-5 w-5" />,
    },
    {
      title: "Junior Developer",
      company: "WebDev Studio",
      period: "2018 - 2019",
      description:
        "Started my career building websites and learning full-stack development fundamentals.",
      icon: <Database className="h-5 w-5" />,
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            À Propos de Moi
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Je suis un développeur full-stack passionné avec plus de 5 ans
            d'expérience dans la création de solutions digitales innovantes.
            J'aime transformer des problèmes complexes en designs simples, beaux
            et intuitifs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Biography */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <Code className="w-4 h-4 text-white" />
              </div>
              Mon Parcours
            </h3>
            <div className="prose prose-lg dark:prose-invert">
              <p className="text-muted-foreground leading-relaxed">
                Mon aventure dans le développement web a commencé pendant mes
                études d'informatique, où j'ai découvert ma passion pour la
                création d'applications interactives et conviviales. Depuis,
                j'ai collaboré avec des startups et des entreprises établies
                pour développer des solutions digitales robustes.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Je me spécialise dans les technologies web modernes et j'aime
                rester à jour avec les dernières tendances. Quand je ne code
                pas, vous me trouverez en train de contribuer à des projets
                open-source ou de mentorer de futurs développeurs.
              </p>
            </div>
          </div>

          {/* Skills with Logos */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center">
                <Database className="w-4 h-4 text-white" />
              </div>
              Compétences & Technologies
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="group relative bg-white dark:bg-slate-800 rounded-xl p-4 border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="flex flex-col items-center gap-3">
                    <div className="group-hover:scale-110 transition-transform duration-300">
                      {skill.logo}
                    </div>
                    <div className="text-center">
                      <p className="font-medium text-sm">{skill.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {skill.category}
                      </p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Education Stairs */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-center mb-12 flex items-center justify-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
              <GraduationCap className="w-4 h-4 text-white" />
            </div>
            Formation Académique
          </h3>
          <div className="relative max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-end justify-center gap-4 md:gap-8">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className={`relative group ${
                    edu.level === 1
                      ? "md:h-32"
                      : edu.level === 2
                      ? "md:h-48"
                      : "md:h-64"
                  } w-full md:w-80`}
                >
                  <Card
                    className={`h-full bg-gradient-to-br ${
                      edu.level === 1
                        ? "from-orange-100 to-red-100 dark:from-orange-900/20 dark:to-red-900/20"
                        : edu.level === 2
                        ? "from-blue-100 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20"
                        : "from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20"
                    } border-2 hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2`}
                  >
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm font-medium text-muted-foreground">
                          {edu.period}
                        </span>
                      </div>
                      <CardTitle className="text-lg leading-tight">
                        {edu.degree}
                      </CardTitle>
                      <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
                        {edu.school}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {edu.description}
                      </p>
                    </CardContent>
                    <div
                      className={`absolute -bottom-2 left-4 right-4 h-2 bg-gradient-to-r ${
                        edu.level === 1
                          ? "from-orange-400 to-red-400"
                          : edu.level === 2
                          ? "from-blue-400 to-indigo-400"
                          : "from-purple-400 to-pink-400"
                      } rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    ></div>
                  </Card>
                  <div
                    className={`absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r ${
                      edu.level === 1
                        ? "from-orange-500 to-red-500"
                        : edu.level === 2
                        ? "from-blue-500 to-indigo-500"
                        : "from-purple-500 to-pink-500"
                    } rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg`}
                  >
                    {edu.level}
                  </div>
                </div>
              ))}
            </div>
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute bottom-[-16px] left-1/2 transform -translate-x-1/2 w-3/4 h-0.5 bg-gradient-to-r from-orange-300 via-blue-300 to-purple-300"></div>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-center flex items-center justify-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
              <Globe className="w-4 h-4 text-white" />
            </div>
            Expérience Professionnelle
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600"
              >
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      {exp.icon}
                    </div>
                    <div>
                      <CardTitle className="text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {exp.title}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground font-medium">
                        {exp.company} • {exp.period}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                </CardContent>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
