// ::By default it width=w-96 you can change it easily from root <div>

export default function InputLabelIcon({ name = 'Website', type = 'text' }) {
  return (
    <div className="sm:w-96">
      <label htmlFor={name + '3'}>{name}</label>
      <div className="w-full relative">
        <input
          className="bg-gray-800 overflow-hidden box-border w-full pl-16 py-2 mt-1 rounded outline-none ring-1 focus:ring"
          id={name + '3'}
          type={type}
          placeholder={`Your ${name}...`}
        />
        <div className="absolute bottom-0 left-0 p-2 bg-gray-700 text-gray-300 tracking-tighter prime">
          <small>URL</small>
        </div>
      </div>
    </div>
  );
}
