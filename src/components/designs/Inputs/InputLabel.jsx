// ::By default it width=w-96 you can change it easily from root <div>

export default function InputLabel({ name = 'Address', type = 'text' }) {
  return (
    <div className="sm:w-96">
      <label htmlFor={name + '1'}>{name}</label>
      <input
        className="bg-gray-800 box-border w-full pl-3 py-2 mt-1 rounded outline-none ring-1 focus:ring"
        id={name + '1'}
        type={type}
        placeholder={`Your ${name}...`}
      />
    </div>
  );
}
