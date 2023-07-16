import StackedLines from "@/components/StackedLines";
import ToastProvider from "@/components/ToastProvider";

export const metadata = {
  title: "Ampass · Tirol1809",
  description: "Tirol1809 erinnert an den Jahrestag der Schlacht am Bergisel. Hansjörg Steixner lässt eine minimalistische Darstellung Andreas Hofers anfertigen.",
};

export default function Tirol1809() {
  return (
    <main className="relative min-h-screen bg-[#F6F0F0] flex justify-center items-center font-body text-[#231F20]">
      <div className="flex flex-col w-[50vw] lg:w-[15vw] items-center">
        <div className="">
          <svg
            width="100%"
            viewBox="0 0 329 280"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_57_3)">
              <path
                d="M81.6307 257.769C70.848 239.647 57.9189 217.787 52.795 209.119C44.539 212.946 36.6587 216.676 33.7598 217.833C23.3553 221.986 12.2195 230.82 3.31131 237.702L0 233.434C0 233.434 5.28531 229.35 11.8497 224.756C25.6858 215.073 40.3617 208.963 55.6197 201.914C64.2994 197.904 73.5562 193.737 76.7003 193.737C78.1846 193.737 78.7051 192.989 79.9602 192.3C81.1707 191.636 82.7249 191.018 85.0908 190.54C76.6974 186.747 64.2935 181.21 51.6853 172.822C35.4595 162.027 35.4595 171.135 18.2195 146.172C0.979686 121.208 10.7827 90.8477 13.8249 76.0045C16.8674 61.1612 25.3182 33.8366 67.573 13.9332C109.828 -5.96992 145.998 0.776888 173.041 2.46356C200.084 4.15035 239.296 10.2225 261.945 11.2347C284.593 12.2467 308.256 22.7043 322.792 49.6917C337.327 76.6792 323.13 94.5583 308.256 127.955C297.521 152.059 267.065 171.945 250.947 181.146C251.431 182.586 252.346 185.507 252.346 187.059C252.346 189.171 253.192 195.508 253.192 195.508C253.192 195.508 250.229 195.508 253.192 202.268C256.156 209.027 253.616 213.674 253.616 213.674C253.616 213.674 251.076 218.321 250.652 222.545C250.652 222.545 250.4 223.112 250.09 224.002C251.788 225.086 253.498 226.148 255.224 227.181C266.695 234.05 278.173 238.454 285.85 250.294C291.903 259.629 296.164 265.987 296.793 279.92L290.904 279.567C289.506 263.823 283.285 250.683 268.58 241.083L266.953 265.529C259.071 265.278 245.334 266.87 239.596 267.594L241.324 247.17C240.713 247.627 239.971 248.199 239.138 248.854L235.413 255.919L232.799 263.406C232.799 263.406 228.64 263.523 225.676 265.636C225.676 265.636 221.02 267.748 218.48 269.015C215.94 270.283 213.749 271.855 212.056 271.855C210.363 271.855 208.67 271.433 208.67 271.433L198.16 269.438L193.927 271.973L186.731 272.395L172.263 274.39C172.263 274.39 159.14 273.123 152.367 272.278L145.594 271.433L137.551 267.208L121.464 259.604C121.464 259.604 116.643 248.072 113.919 246.203C107.145 241.556 105.378 227.498 105.378 227.498L96.1389 207.337L95.2922 197.198L95.4082 195.234L94.8135 194.994L93.0545 195.084C86.523 195.394 85.3616 195.778 80.4768 198.296C79.892 198.598 79.278 198.822 78.5801 198.963C85.9047 210.198 106.227 241.7 118.088 263.374C106.777 260.24 92.9427 258.614 81.6307 257.769ZM104.267 114.386C104.549 112.871 104.817 111.758 105.029 111.44C105.997 109.991 110.538 94.0398 111.305 92.3126C111.939 90.885 116.942 78.5112 126.092 70.7024L128.866 68.4801C131.853 66.235 135.302 64.1063 139.244 62.3182C161.376 52.2791 199.639 55.1156 212.946 68.6982C220.72 75.3623 223.295 83.9462 224.83 89.8953C224.83 89.8953 224.432 100.341 224.289 99.7751C224.085 101.665 223.963 103.611 223.899 105.522C223.748 110.069 225.068 113.979 225.253 116.932C225.285 117.445 225.509 118.513 225.839 119.866C227.473 120.824 229.191 123.846 231.18 125.381L233.72 137.21C234.144 142.44 236.544 147.087 240.916 151.151C241.445 151.354 244.22 156.558 244.652 158.215C246.249 164.349 243.456 166.359 243.456 166.359C243.456 166.359 243.382 167.087 244.229 171.311L245.529 173.132C250.15 169.113 256.603 163.521 266.739 156.643C287.905 142.28 291.292 137.21 306.532 110.173C313.956 97.001 317.361 85.0322 317.629 73.8761C312.78 75.6321 307.566 77.2994 306.456 77.6617C289.333 83.2446 255.63 83.8256 236.839 83.2416L236.95 78.6656C262.495 79.4593 293.279 78.7839 317.629 69.1882C317.373 58.5354 314.255 50.4406 309.071 40.8905C298.065 20.6126 263.352 18.078 237.953 17.2331C212.553 16.3882 140.886 -3.01488 96.5622 8.78388C30.8886 26.2659 26.2901 55.2539 16.1303 88.2055C5.97055 121.157 17.8236 138.9 27.1369 150.729C36.4499 162.557 46.6097 165.092 60.1563 171.006C70.1509 175.37 95.7153 190.017 95.7153 190.017L96.0647 185.675C96.0647 185.675 99.4516 183.563 98.6049 180.606C97.758 177.648 99.028 174.269 99.028 172.579C99.028 170.889 97.3347 164.552 97.3347 164.552C97.3347 164.552 97.0507 160.507 96.0647 158.638C91.9837 150.9 101.669 130.795 102.489 128.339C102.447 128.211 103.143 120.35 104.267 114.386H104.267ZM200.928 97.0031C199.829 96.8346 198.618 96.3335 196.533 96.9188C191.125 98.4369 193.068 99.8706 192.477 100.798C191.885 101.726 188.003 102.233 189.186 103.919C189.775 104.76 190.203 102.977 194.706 103.122C197.324 103.206 204.215 105.343 205.1 105.514C209.967 106.456 206.252 101.389 204.646 99.8706C203.041 98.3525 200.928 97.0031 200.928 97.0031ZM189.012 109.4C189.012 109.4 185.579 109.841 184.448 110.413C181.685 111.811 181.838 121.57 183.213 126.45C183.94 129.03 184.986 127.695 188.103 129.423C188.79 129.805 193.492 133.068 188.449 138.176C186.499 140.152 189.827 144.175 193.015 148.914C193.488 149.179 193.985 149.4 194.495 149.545C197.451 150.388 200.408 149.545 202.941 154.181C203.659 155.494 204.309 156.739 204.756 157.812C211.815 155.847 211.77 133.087 214.027 124.75C214.711 122.22 215.717 117.75 214.449 117.075C213.182 116.401 210.562 112.268 209.125 112.605C207.689 112.943 205.674 113.823 205.069 116.316C204.419 118.991 197.192 117.05 198.296 116.252C201.534 113.912 201.581 112.342 201.885 112.038C203.786 110.141 199.674 109.191 199.406 109.907C198.296 112.881 191.961 115.304 189.688 111.003C188.837 109.393 189.012 109.4 189.012 109.4ZM184.105 159.478C184.098 160.583 184.001 161.674 183.688 162.195C182.927 163.46 178.364 163.123 178.026 163.881C177.687 164.64 176.842 166.158 177.096 166.58C177.35 167.002 181.799 166.048 183.012 168.604C183.395 169.411 183.734 169.999 184.059 170.421L187.197 171.144C189.434 170.628 193.651 170.377 193.651 167.667C193.651 161.346 193.041 158.692 189.005 156.288C187.584 155.442 185.652 155.787 184.633 156.066C184.588 156.033 183.671 156.338 182.143 156.338C180.615 156.338 178.507 155.924 178.507 155.924C177.994 155.907 177.6 155.93 177.434 155.954C176.842 156.038 175.237 156.207 172.955 156.038C170.673 155.869 169.119 156.443 168.085 155.881C166.404 154.966 157.731 155.891 155.67 156.015C155.872 157.07 155.922 158.639 154.907 159.905C154.402 160.536 154.047 161.205 153.798 161.9C154.345 164.598 156.256 167.829 156.898 169.11C157.743 170.797 161.715 172.062 167.039 171.893C167.753 171.871 168.394 171.801 168.969 171.693C170.371 171.063 171.417 170.467 171.417 170.467L173.562 168.325C173.769 167.819 173.893 167.309 173.969 166.833C174.307 164.725 172.87 163.797 172.194 162.869C171.518 161.942 171.011 161.014 172.194 160.424C173.378 159.833 177.687 160.171 181.153 159.918C181.638 159.882 182.029 159.815 182.341 159.726C182.917 159.672 183.439 159.61 183.824 159.54C183.919 159.523 184.013 159.502 184.105 159.478ZM174.561 145.665C174.561 145.665 173.293 145.539 172.11 146.002L171.309 146.308L170.57 148.077L162.527 150.189L158.132 153.027C157.962 153.521 158.67 153.288 160.445 153.288C162.22 153.288 162.832 153.064 165.029 152.221C167.226 151.377 167.321 151.611 168.849 152.068C170.954 152.698 172.046 153.577 172.975 153.746C173.905 153.914 174.934 152.817 175.42 152.526C176.948 151.611 179.393 152.549 181.068 152.833C189.005 154.181 185.881 152.159 184.782 150.388C184.395 149.764 183.251 149.15 181.848 148.561C179.741 148.39 177.767 148.499 177.767 148.499L176.966 146.741C175.94 146.358 175.07 145.997 174.561 145.665ZM184.588 130.872C184.588 130.872 184.33 131.556 184.435 132.397C184.588 133.617 184.283 134.672 184.283 135.599C184.283 136.527 187.11 135.904 187.608 134.771C188.044 133.782 188.179 132.473 187.186 131.482C186.827 131.124 184.588 130.872 184.588 130.872ZM191.958 108.541C191.958 109.1 192.412 109.553 192.972 109.553C193.532 109.553 193.986 109.1 193.986 108.541C193.986 107.982 193.532 107.529 192.972 107.529C192.412 107.529 191.958 107.982 191.958 108.541ZM107.88 136.209C111.7 141.241 112.978 137.166 113.993 135.142C114.053 135.02 113.48 133.618 113.509 133.501C113.194 132.858 112 130.867 111.395 130.262L107.88 136.209ZM167.932 132.397L163.043 130.72C163.043 130.72 161.209 132.854 161.209 133.159C161.209 134.074 161.826 134.925 163.807 135.142C164.089 134.991 166.099 134.38 167.932 135.294C169.961 136.306 171.095 136.831 172.211 138.802C174.408 142.681 174.177 139.285 176.452 138.412C178.65 137.569 182.199 137.4 181.354 133.183C180.885 130.844 179.157 126.689 179.326 122.219C179.495 117.75 179.41 115.726 179.326 113.449C179.241 111.172 180.086 101.81 182.96 98.4369C185.833 95.0634 193.27 91.0996 200.199 92.3646C207.13 93.6297 217.996 101.862 219.105 97.709C220.101 93.9828 220.51 90.4029 220.159 87.3148C214.378 69.9876 168.636 47.7776 134.995 71.1709C131.678 73.5737 128.496 76.4743 125.779 79.9639L124.237 82.0849C123.755 82.7961 123.293 83.5297 122.852 84.286C121.489 86.6248 119.042 105.409 119.042 109.211C119.042 111.856 120.272 121.66 121.733 128.945C123.7 136.561 126.046 140.437 127.606 142.966C127.887 143.422 128.156 143.891 128.42 144.369C130.318 147.377 132.348 150.462 133.755 152.577C134.523 153.186 135.388 153.606 136.395 153.761C140.789 154.436 150.268 149.332 156.508 147.014C161.936 144.999 163.122 145.712 165.909 145.288C167.213 144.946 168.788 144.394 170.057 143.919C170.799 142.891 169.46 140.631 169.46 140.631C169.46 140.631 167.833 137.906 165.804 137.906C164.651 137.906 161.453 138.915 159.528 136.514C158.527 135.266 157.56 133.292 158.612 131.94L161.973 127.212L169.174 130.221L167.932 132.397Z"
                fill="#231F20"
              />
              <path
                d="M81.6307 257.769C70.848 239.647 57.9189 217.787 52.795 209.119C44.539 212.946 36.6587 216.676 33.7596 217.833C23.3553 221.986 12.2195 230.82 3.31131 237.702L0 233.434C0 233.434 5.28531 229.35 11.8497 224.756C25.6858 215.073 40.3617 208.963 55.6195 201.914C64.2994 197.904 73.5562 193.737 76.7003 193.737C78.1846 193.737 78.7051 192.989 79.9602 192.3C81.1707 191.636 82.7249 191.018 85.0908 190.54C76.6974 186.747 64.2935 181.21 51.6853 172.822C35.4595 162.027 35.4595 171.135 18.2195 146.172C0.979686 121.208 10.7827 90.8477 13.8249 76.0045C16.8674 61.1612 25.3182 33.8366 67.573 13.9332C109.828 -5.96992 145.998 0.776888 173.041 2.46356C200.084 4.15035 239.296 10.2225 261.945 11.2347C284.593 12.2467 308.256 22.7043 322.792 49.6917C337.327 76.6792 323.13 94.5583 308.256 127.955C297.521 152.059 267.065 171.945 250.947 181.146C251.431 182.586 252.346 185.507 252.346 187.059C252.346 189.171 253.192 195.508 253.192 195.508C253.192 195.508 250.229 195.508 253.192 202.268C256.156 209.027 253.616 213.674 253.616 213.674C253.616 213.674 251.076 218.321 250.652 222.545C250.652 222.545 250.4 223.112 250.09 224.002C251.788 225.086 253.498 226.148 255.224 227.181C266.695 234.05 278.173 238.454 285.85 250.294C291.903 259.629 296.164 265.987 296.793 279.92L290.904 279.567C289.506 263.823 283.285 250.683 268.58 241.083L266.953 265.529C259.071 265.278 245.334 266.87 239.596 267.594L241.324 247.17C240.713 247.627 239.971 248.199 239.138 248.854L235.413 255.919L232.799 263.406C232.799 263.406 228.64 263.523 225.676 265.636C225.676 265.636 221.02 267.748 218.48 269.015C215.94 270.283 213.749 271.855 212.056 271.855C210.363 271.855 208.67 271.433 208.67 271.433L198.16 269.438L193.927 271.973L186.731 272.395L172.263 274.39C172.263 274.39 159.14 273.123 152.367 272.278L145.594 271.433L137.551 267.208L121.464 259.604C121.464 259.604 116.643 248.072 113.919 246.203C107.145 241.556 105.378 227.498 105.378 227.498L96.1389 207.337L95.2922 197.198L95.4082 195.234L94.8135 194.994L93.0545 195.084C86.523 195.394 85.3616 195.778 80.4768 198.296C79.892 198.598 79.278 198.822 78.5801 198.963C85.9047 210.198 106.227 241.7 118.088 263.374C106.777 260.24 92.9427 258.614 81.6307 257.769ZM104.267 114.386C104.549 112.871 104.817 111.758 105.029 111.44C105.997 109.991 110.538 94.0398 111.305 92.3126C111.939 90.885 116.942 78.5112 126.092 70.7024L128.866 68.4801C131.853 66.235 135.302 64.1063 139.244 62.3182C161.376 52.2791 199.639 55.1156 212.946 68.6982C220.72 75.3623 223.295 83.9462 224.83 89.8953C224.83 89.8953 224.432 100.341 224.289 99.7751C224.085 101.665 223.963 103.611 223.899 105.522C223.748 110.069 225.068 113.979 225.253 116.932C225.285 117.445 225.509 118.513 225.839 119.866C227.473 120.824 229.191 123.846 231.18 125.381L233.72 137.21C234.144 142.44 236.544 147.087 240.916 151.151C241.445 151.354 244.22 156.558 244.652 158.215C246.249 164.349 243.456 166.359 243.456 166.359C243.456 166.359 243.382 167.087 244.229 171.311L245.529 173.132C250.15 169.113 256.603 163.521 266.739 156.643C287.905 142.28 291.292 137.21 306.532 110.173C313.956 97.001 317.361 85.0322 317.629 73.8761C312.78 75.6321 307.566 77.2994 306.456 77.6617C289.333 83.2446 255.63 83.8256 236.839 83.2416L236.95 78.6656C262.495 79.4593 293.279 78.7839 317.629 69.1882C317.373 58.5354 314.255 50.4406 309.071 40.8905C298.065 20.6126 263.352 18.078 237.953 17.2331C212.553 16.3882 140.886 -3.01488 96.5622 8.78388C30.8886 26.2659 26.2901 55.2539 16.1303 88.2055C5.97055 121.157 17.8236 138.9 27.1369 150.729C36.4499 162.557 46.6097 165.092 60.1563 171.006C70.1509 175.37 95.7153 190.017 95.7153 190.017L96.0647 185.675C96.0647 185.675 99.4516 183.563 98.6049 180.606C97.758 177.648 99.028 174.269 99.028 172.579C99.028 170.889 97.3347 164.552 97.3347 164.552C97.3347 164.552 97.0507 160.507 96.0647 158.638C91.9837 150.9 101.669 130.795 102.489 128.339C102.447 128.211 103.143 120.35 104.267 114.386H104.267ZM200.928 97.0031C199.829 96.8346 198.618 96.3335 196.533 96.9188C191.125 98.4369 193.068 99.8706 192.477 100.798C191.885 101.726 188.003 102.233 189.186 103.919C189.775 104.76 190.203 102.977 194.706 103.122C197.324 103.206 204.215 105.343 205.1 105.514C209.967 106.456 206.252 101.389 204.646 99.8706C203.041 98.3525 200.928 97.0031 200.928 97.0031ZM189.012 109.4C189.012 109.4 185.579 109.841 184.448 110.413C181.685 111.811 181.838 121.57 183.213 126.45C183.94 129.03 184.986 127.695 188.103 129.423C188.79 129.805 193.492 133.068 188.449 138.176C186.499 140.152 189.827 144.175 193.015 148.914C193.488 149.179 193.985 149.4 194.495 149.545C197.451 150.388 200.408 149.545 202.941 154.181C203.659 155.494 204.309 156.739 204.756 157.812C211.815 155.847 211.77 133.087 214.027 124.75C214.711 122.22 215.717 117.75 214.449 117.075C213.182 116.401 210.562 112.268 209.125 112.605C207.689 112.943 205.674 113.823 205.069 116.316C204.419 118.991 197.192 117.05 198.296 116.252C201.534 113.912 201.581 112.342 201.885 112.038C203.786 110.141 199.674 109.191 199.406 109.907C198.296 112.881 191.961 115.304 189.688 111.003C188.837 109.393 189.012 109.4 189.012 109.4ZM184.105 159.478C184.098 160.583 184.001 161.674 183.688 162.195C182.927 163.46 178.364 163.123 178.026 163.881C177.687 164.64 176.842 166.158 177.096 166.58C177.35 167.002 181.799 166.048 183.012 168.604C183.395 169.411 183.734 169.999 184.059 170.421L187.197 171.144C189.434 170.628 193.651 170.377 193.651 167.667C193.651 161.346 193.041 158.692 189.005 156.288C187.584 155.442 185.652 155.787 184.633 156.066C184.588 156.033 183.671 156.338 182.143 156.338C180.615 156.338 178.507 155.924 178.507 155.924C177.994 155.907 177.6 155.93 177.434 155.954C176.842 156.038 175.237 156.207 172.955 156.038C170.673 155.869 169.119 156.443 168.085 155.881C166.404 154.966 157.731 155.891 155.67 156.015C155.872 157.07 155.922 158.639 154.907 159.905C154.402 160.536 154.047 161.205 153.798 161.9C154.345 164.598 156.256 167.829 156.898 169.11C157.743 170.797 161.715 172.062 167.039 171.893C167.753 171.871 168.394 171.801 168.969 171.693C170.371 171.063 171.417 170.467 171.417 170.467L173.562 168.325C173.769 167.819 173.893 167.309 173.969 166.833C174.307 164.725 172.87 163.797 172.194 162.869C171.518 161.942 171.011 161.014 172.194 160.424C173.378 159.833 177.687 160.171 181.153 159.918C181.638 159.882 182.029 159.815 182.341 159.726C182.917 159.672 183.439 159.61 183.824 159.54C183.919 159.523 184.013 159.502 184.105 159.478ZM174.561 145.665C174.561 145.665 173.293 145.539 172.11 146.002L171.309 146.308L170.57 148.077L162.527 150.189L158.132 153.027C157.962 153.521 158.67 153.288 160.445 153.288C162.22 153.288 162.832 153.064 165.029 152.221C167.226 151.377 167.321 151.611 168.849 152.068C170.954 152.698 172.046 153.577 172.975 153.746C173.905 153.914 174.934 152.817 175.42 152.526C176.948 151.611 179.393 152.549 181.068 152.833C189.005 154.181 185.881 152.159 184.782 150.388C184.395 149.764 183.251 149.15 181.848 148.561C179.741 148.39 177.767 148.499 177.767 148.499L176.966 146.741C175.94 146.358 175.07 145.997 174.561 145.665ZM184.588 130.872C184.588 130.872 184.33 131.556 184.435 132.397C184.588 133.617 184.283 134.672 184.283 135.599C184.283 136.527 187.11 135.904 187.608 134.771C188.044 133.782 188.179 132.473 187.186 131.482C186.827 131.124 184.588 130.872 184.588 130.872ZM191.958 108.541C191.958 109.1 192.412 109.553 192.972 109.553C193.532 109.553 193.986 109.1 193.986 108.541C193.986 107.982 193.532 107.529 192.972 107.529C192.412 107.529 191.958 107.982 191.958 108.541ZM107.88 136.209C111.7 141.241 112.978 137.166 113.993 135.142C114.053 135.02 113.48 133.618 113.509 133.501C113.194 132.858 112 130.867 111.395 130.262L107.88 136.209ZM167.932 132.397L163.043 130.72C163.043 130.72 161.209 132.854 161.209 133.159C161.209 134.074 161.826 134.925 163.807 135.142C164.089 134.991 166.099 134.38 167.932 135.294C169.961 136.306 171.095 136.831 172.211 138.802C174.408 142.681 174.177 139.285 176.452 138.412C178.65 137.569 182.199 137.4 181.354 133.183C180.885 130.844 179.157 126.689 179.326 122.219C179.495 117.75 179.41 115.726 179.326 113.449C179.241 111.172 180.086 101.81 182.96 98.4369C185.833 95.0634 193.27 91.0996 200.199 92.3646C207.13 93.6297 217.996 101.862 219.105 97.709C220.101 93.9828 220.51 90.4029 220.159 87.3148C214.378 69.9876 168.636 47.7776 134.995 71.1709C131.678 73.5737 128.496 76.4743 125.779 79.9639L124.237 82.0849C123.755 82.7961 123.293 83.5297 122.852 84.286C121.489 86.6248 119.042 105.409 119.042 109.211C119.042 111.856 120.272 121.66 121.733 128.945C123.7 136.561 126.046 140.437 127.606 142.966C127.887 143.422 128.156 143.891 128.42 144.369C130.318 147.377 132.348 150.462 133.755 152.577C134.523 153.186 135.388 153.606 136.395 153.761C140.789 154.436 150.268 149.332 156.508 147.014C161.936 144.999 163.122 145.712 165.909 145.288C167.213 144.946 168.788 144.394 170.057 143.919C170.799 142.891 169.46 140.631 169.46 140.631C169.46 140.631 167.833 137.906 165.804 137.906C164.651 137.906 161.453 138.915 159.528 136.514C158.527 135.266 157.56 133.292 158.612 131.94L161.973 127.212L169.174 130.221L167.932 132.397Z"
                fill="#231F20"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M149.292 92.2805C150.137 92.2805 156.56 90.8467 159.687 92.5334C162.814 94.2202 164.419 95.9069 164.335 96.2443C164.25 96.5815 161.884 97.3406 160.278 96.7503C158.672 96.1598 153.264 94.6418 151.658 94.5576C150.052 94.4731 147.94 94.2202 147.94 94.2202L149.292 92.2805Z"
                fill="#231F20"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M153.518 99.2802C153.518 99.2802 156.983 98.7743 160.194 101.304C163.405 103.834 163.912 107.461 163.912 107.461C163.912 107.461 161.969 109.822 160.786 108.895C159.603 107.967 157.574 107.039 156.729 106.702C155.884 106.365 154.701 106.617 154.701 106.617C154.701 106.617 155.039 110.413 152.081 111.172C145.164 112.946 144.729 108.051 144.729 108.051C144.729 108.051 143.546 107.967 142.7 108.557C141.855 109.148 141.095 109.063 140.588 108.051C140.081 107.039 140.198 107.141 140.229 107.086C140.37 106.836 140.924 106.435 141.264 106.196C146.221 102.699 153.349 100.798 156.222 101.642C155.63 100.967 155.039 100.292 154.025 99.8706C153.011 99.4489 153.518 99.2802 153.518 99.2802ZM146.504 107.377C146.504 107.936 146.957 108.389 147.517 108.389C148.078 108.389 148.532 107.936 148.532 107.377C148.532 106.818 148.078 106.365 147.517 106.365C146.957 106.365 146.504 106.818 146.504 107.377Z"
                fill="#231F20"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M146.387 107.312C146.387 106.513 147.037 105.864 147.838 105.864C148.64 105.864 149.29 106.513 149.29 107.312C149.29 108.112 148.64 108.761 147.838 108.761C147.037 108.761 146.387 108.112 146.387 107.312Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M191.664 108.666C191.664 107.866 192.314 107.217 193.115 107.217C193.916 107.217 194.567 107.866 194.567 108.666C194.567 109.465 193.916 110.114 193.115 110.114C192.314 110.114 191.664 109.465 191.664 108.666Z"
                fill="white"
              />
            </g>
          </svg>
          <div className="flex flex-col mt-14 items-center">
            <div className="flex flex-col gap-1">
              <a
                href="https://www.spreadshirt.at/shop/user/tirol1809/bekleidung/t-shirts/?safesearch=0"
                className="flex flex-col gap-1 group"
              >
                <span className="group-hover:bg-[#231F20] group-hover:text-white">
                  zum Shop {"->"}
                </span>
                <StackedLines />
              </a>
            </div>
          </div>
        </div>

        <div className="fixed bottom-5 lg:right-10 w-[20vw] lg:w-[7vw]">
          <svg
            className="w-full"
            viewBox="0 0 257 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_57_11)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.29375 14.9218C6.42753 14.0641 5.62531 12.1509 7.63184 9.90825C9.03622 8.32518 11.11 7.79756 11.9121 7.66585V37.0853C11.9121 50.2125 25.1554 49.0911 25.1554 49.0911C32.2455 49.0911 36.7942 43.5501 38.2649 41.967V36.558C37.3954 37.1518 34.5193 39.5261 32.6466 39.4598C31.3096 39.3942 29.4368 39.1959 29.4368 35.1064V7.66585H36.1247V1.20186H15.6578C10.6415 1.20186 6.62858 1.59754 3.75244 3.83995C1.27752 5.75235 -0.528842 8.32518 0.140589 14.9218H6.29375Z"
                fill="#231F20"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M42.6667 8.45679H56.311V2.25677H42.6667V8.45679ZM56.7121 10.964H41.9983V40.2517C41.9983 47.5733 46.2112 48.6946 50.4252 48.6946C56.8468 48.6946 61.9968 43.1536 62.8663 41.3066V35.8976C62.8663 35.8976 61.0599 38.5367 58.7196 38.5367C56.5785 38.5367 56.7121 36.2941 56.7121 34.5791V10.964Z"
                fill="#231F20"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M62.7153 39.4597C62.7153 44.2095 64.387 48.5628 71.0087 48.5628C78.8346 48.5628 83.0477 46.8474 91.6767 40.3173V35.1731C89.2682 36.6234 87.2617 37.6129 84.3854 38.9988C82.5801 39.8564 80.9075 40.9776 79.0347 39.9882C77.8313 39.3279 77.4292 38.3384 77.4292 36.2941V29.4338C77.4292 25.9382 79.8378 23.2335 83.1823 23.2335C84.9204 23.2335 86.1248 23.6945 87.329 24.8158V10.0402C85.991 10.1065 85.0551 10.3704 83.8508 10.7005C81.4432 11.3597 78.6335 13.6021 77.4292 14.7898V10.8322H62.7153V39.4597Z"
                fill="#231F20"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M110.319 42.2306C107.844 42.2306 105.77 41.1093 105.77 37.7447V20.2644C105.77 18.4839 106.038 17.4945 108.312 17.4281C111.188 17.3625 111.255 18.8794 111.255 19.7371V21.5185C111.255 22.4415 111.255 23.1007 111.657 23.893C112.258 25.0807 113.462 25.7399 114.866 25.7399V38.1413C114.866 40.5156 112.726 42.2306 110.319 42.2306ZM119.95 10.964H111.255V14.3944C108.781 11.2279 105.503 10.1721 101.489 10.1721C92.5267 10.1721 91.056 16.1749 91.056 20.9901V37.8775C91.056 46.5839 98.4798 48.6946 103.763 48.6946C107.375 48.6946 113.329 48.4972 116.873 44.8689C119.282 42.4291 119.549 40.2517 119.549 37.0853V25.5416C119.683 25.5416 121.354 25.2779 122.826 24.3548C123.829 23.6945 124.833 22.7053 125.167 21.914V17.3625C125.167 17.3625 123.093 20.2644 121.154 19.7371C119.749 19.3414 119.95 18.1537 119.95 16.9672V10.964Z"
                fill="#231F20"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M139.123 0.146088H124.409V40.2517C124.409 47.5733 128.622 48.6946 132.836 48.6946C139.257 48.6946 144.407 42.6263 145.277 40.7793V35.5021C144.809 36.1625 142.668 38.2065 141.13 38.273C138.989 38.3384 139.123 36.0306 139.123 34.3153V0.146088Z"
                fill="#231F20"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M152.722 24.5066L157.588 21.0073V47.9035H170.363V13.4081H160.833L152.722 19.4069V24.5066Z"
                fill="#231F20"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M192.913 20.507C192.811 23.7567 190.277 24.6065 190.277 24.6065C190.277 24.6065 187.692 23.6565 187.54 20.6069C187.438 18.5075 188.553 17.3077 190.277 17.3077C192.406 17.3077 192.964 18.8577 192.913 20.507ZM187.489 38.8546C187.489 41.4545 186.475 43.2043 184.295 43.2043C181 43.2043 180.798 40.2544 181.051 38.1049C181.203 36.8049 182.065 34.1054 185.208 33.0555C186.121 33.9549 187.489 36.7546 187.489 38.8546ZM180.138 30.1058C177.249 32.3056 176.083 35.0548 176.083 38.7043C176.033 48.8532 185.512 48.3031 188.351 48.3031C190.48 48.3031 199.807 49.0034 199.807 37.705C199.807 29.7555 194.84 28.0064 194.84 28.0064C196.613 26.3564 197.476 24.1563 197.476 21.4071C197.476 16.5075 194.941 13.0081 187.945 13.0081C181.203 13.0081 177.502 16.2076 177.502 21.3073C177.502 26.856 179.023 28.1559 180.138 30.1058Z"
                fill="#231F20"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M220.934 42.7542C217.386 42.7542 217.893 40.4542 217.893 38.4046V21.4071C217.893 19.0073 219.312 18.3076 220.833 18.3076C222.658 18.3076 223.875 19.4572 223.875 21.0073V38.8043C223.875 41.1042 223.723 42.7542 220.934 42.7542ZM204.916 39.6044C204.916 46.104 210.036 48.3031 217.792 48.3031C224.229 48.3031 228.234 46.104 228.234 38.6045V23.4064C228.234 17.1572 225.699 13.0081 216.778 13.0081C213.483 13.0081 209.782 13.5079 207.349 15.708C205.524 17.358 204.916 19.0073 204.916 21.8068V39.6044Z"
                fill="#231F20"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M241.149 18.2078C243.836 18.2078 243.988 20.4574 243.988 21.8068V30.7061C243.988 33.0555 242.822 33.9053 241.048 33.9053C238.918 33.9053 238.209 32.7055 238.209 30.4055V22.0066C238.209 19.9569 238.665 18.2078 241.149 18.2078ZM256.965 22.4072C256.965 16.6074 252.961 13.0081 245.103 13.0081C238.767 13.0081 233.647 15.6575 233.647 21.7068V31.8054C233.647 35.805 236.131 38.2048 239.527 38.2048C241.352 38.2048 242.619 38.1049 243.988 37.1047V40.0043C243.988 43.2539 241.504 43.3042 239.73 43.3042C238.006 43.3042 236.384 42.6039 235.573 42.1044V46.7035C237.854 47.5533 240.287 48.3031 243.379 48.3031C245.965 48.3031 250.071 48.0537 252.707 46.5037C256.661 44.154 256.965 41.0546 256.965 36.5052V22.4072Z"
                fill="#231F20"
              />
            </g>
            <defs>
              <clipPath id="clip0_57_11">
                <rect
                  width="257"
                  height="49"
                  fill="white"
                  transform="translate(0 0.146088)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
      <ToastProvider
        message={
          <>
            Zum 200. Jahrestag startete{" "}
            <span className="text-white underline">Hansjörg Steixner</span> die
            Kampagne <span className="text-lagoon-500">Tirol1809</span>
          </>
        }
      />
    </main>
  );
}
