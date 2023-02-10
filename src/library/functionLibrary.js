import {useEffect, useState, useMemo} from 'react';

export function IsInViewport(ref) {
  const [refreshComponent, setRefreshComponent] = useState(false);
  var isListening = true;
  var isIntersecting = false;

  function SetVariable(value){
    if(isIntersecting !== value){
      setRefreshComponent(value);
      isIntersecting = true;
    }
  }

    function Init(){
      const observer = useMemo(
        () =>
          new IntersectionObserver(([entry]) =>
            SetVariable(entry.isIntersecting),
          ),
        [],
      );
    
      useEffect(() => {
        observer.observe(ref.current);
    
        return () => {
          observer.disconnect();
        };
      }, [observer]);
    }
      
    function StopListening()
    {
      isListening = false;
    }

    function GetIsIntersecting(){
      if(isListening && isIntersecting){
        isListening = false;
        return isIntersecting;
      }
    }

    Init();
    return{
      GetIsIntersecting,
      StopListening
    }


  }
  
  export function Lerp(start, destination, value){
    return start + (destination - start) * value;
  }