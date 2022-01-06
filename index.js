                  const nums = [2, 7, 11, 15];
                        const target = 9;
                        
                        let twoSum = function(nums,target) {
                            let map = new Map;
                            for (let i=0; i<nums.length;i++) {
                                let complement = target-nums[i];
                                if(map.has(complement)) {
                                    return[map.get(complement),i]
                                }
                                map.set(nums[i],i);
                            }
                            
                        }
                        console.log(twoSum(nums,target));