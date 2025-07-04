import { useEffect, useState } from 'react'
import './App.css'
import { useNavigate } from '@tanstack/react-router'
import { getData, postData} from './api/data'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

const App = () => {
  const [version, setVersion] = useState("");
  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const query = useQuery({ queryKey: ["data"], queryFn: getData }); 

  const mutation = useMutation({
    mutationFn: postData,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["data"] });
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      const ver = await window.electronAPI.getAppVersion();
      setVersion(ver);
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>App Version: {version}</h1>
      <button
        onClick={() => {
          navigate({ to: "/about" });
        }}
      >
        Go to About
      </button>
      <br />

      <ul>
        {query.data?.map((data: any) => (
          <li key={data.id}>{data.name}</li>
        ))}
      </ul>

      <button
        onClick={() => {
          mutation.mutate({
            id: Date.now(),
            name: "Do Laundry",
          });
        }}
      >
        Add Todo
      </button>
    </div>
  );
}

export default App
